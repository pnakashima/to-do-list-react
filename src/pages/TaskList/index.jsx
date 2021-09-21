
import Card from "../../components/Card"
import { useEffect, useState } from "react"

const TaskList = () => {

  const [list, setList] = useState([])

  useEffect(() => {
    console.log("Lendo lista...")
    let tasksList = localStorage.getItem("tasksList")
    if (!tasksList) {
      tasksList = []
    } else {
      tasksList = JSON.parse(tasksList)
    }
    setList(tasksList)
    console.log(tasksList)
    localStorage.setItem("tasksList", JSON.stringify(tasksList))
  }, [])

  const toDo = list.filter((task) => task.status === "to-do")
  const done = list.filter((task) => task.status === "done")


  const changeStatus = (task) => {
    console.log("antes", task)
    if (task.status === "to-do") {
      console.log("mudou pra done")
      task.status = "done"
    } else {
      console.log("mudou pra to-do")
      task.status = "to-do"
    }
    console.log("depois", task)
    let newList = list.filter(item => item.id !== task.id)
    console.log("filter", newList)
    newList.push(task)
    console.log("new", newList)
    localStorage.setItem("tasksList", JSON.stringify(newList))
    setList(newList)
  }

  const clearList = (status) => {
    let newList = list.filter(item => item.status !== status)
    setList(newList)
    localStorage.setItem("tasksList", JSON.stringify(newList))
  }

  return (
    <>
      <div className="buttons">
        <div className="left-button">
          <h2>Tarefas pendentes</h2>
          <button onClick={() => clearList("to-do")}>Limpar lista</button>
        </div>
        <div className="right-button">
          <h2>Tarefas concluídas</h2>
          <button onClick={() => clearList("done")}>Limpar lista</button>
        </div>
      </div>
      <div className="tasks">
        <div className="left-tasks">
          {toDo.map((task, index) => {
            return (
              <div className="card" key={index}>
                <Card index={index} task={task.task} color={task.color} onDoubleClick={() => changeStatus(task)} />
              </div>
            )
          })}
        </div>
        <div className="right-tasks">
          {done.map((task, index) => {
            return (
              <div className="card" key={index}>
                <Card index={index} task={task.task} color={task.color} onDoubleClick={() => changeStatus(task)} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default TaskList