from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

employees = []
tasks = []
employee_id_counter = 1
task_id_counter = 1

@app.route("/api/employees", methods=["GET"])
def get_employees():
    global employees, tasks
    output = []
    for emp in employees:
        emp_tasks = [t for t in tasks if t["emp_id"] == emp["id"]]
        complete = len([t for t in emp_tasks if t["completed"]])
        status = (
            "completed" if emp_tasks and complete == len(emp_tasks)
            else "in progress" if emp_tasks
            else "pending"
        )
        emp_copy = emp.copy()
        emp_copy["status"] = status
        emp_copy["tasks"] = emp_tasks
        output.append(emp_copy)
    return jsonify(output)

@app.route("/api/employees", methods=["POST"])
def add_employee():
    global employees, employee_id_counter
    data = request.json
    name, email = data.get("name"), data.get("email")

    if not name or not email:
        return jsonify({"error": "Missing fields"}), 400

    new_emp = {
        "id": employee_id_counter,
        "name": name,
        "email": email
    }
    employees.append(new_emp)
    employee_id_counter += 1
    return jsonify({"message": "Success", "id": new_emp["id"]})

@app.route("/api/employees/<int:emp_id>", methods=["DELETE"])
def delete_employee(emp_id):
    global employees, tasks
    employees = [e for e in employees if e["id"] != emp_id]
    tasks = [t for t in tasks if t["emp_id"] != emp_id]
    return jsonify({"message": "Employee deleted"})

@app.route("/api/tasks", methods=["GET"])
def get_tasks():
    emp_id = request.args.get("emp_id", type=int)
    if emp_id:
        return jsonify([t for t in tasks if t["emp_id"] == emp_id])
    return jsonify(tasks)

@app.route("/api/tasks", methods=["POST"])
def add_task():
    global task_id_counter
    data = request.json
    if not (data.get("emp_id") and data.get("title")):
        return jsonify({"error": "emp_id and title required"}), 400
    new_task = {
        "id": task_id_counter,
        "emp_id": data["emp_id"],
        "title": data["title"],
        "description": data.get("description", ""),
        "completed": False
    }
    tasks.append(new_task)
    task_id_counter += 1
    return jsonify({"message": "Task added", "task": new_task})

@app.route("/api/tasks/<int:task_id>", methods=["PUT"])
def update_task(task_id):
    for task in tasks:
        if task["id"] == task_id:
            task["completed"] = request.json.get("completed", False)
            return jsonify({"message": "Task updated", "task": task})
    return jsonify({"error": "Not found"}), 404

if __name__ == "__main__":
    app.run(port=5001, debug=True)
