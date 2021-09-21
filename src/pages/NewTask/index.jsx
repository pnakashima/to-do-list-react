

import { useState } from "react"
import { useHistory } from "react-router"



const NewTask = () => {

    const [task, setTask] = useState("")
    const [color, setColor] = useState("")
    
    const history = useHistory()

    const handleSubmit = async (event) => {
        event.preventDefault()
        let tasksList = localStorage.getItem("tasksList")
        tasksList = JSON.parse(tasksList)
        const id = Math.floor((1 + Math.random()) * 0x1000000).toString(16)  
        let newTask = { id, task, color, status: "to-do" }
        tasksList.push(newTask)
        localStorage.setItem("tasksList", JSON.stringify(tasksList))
        history.push("/")
    }





    return (
        <>
            <div className="task-form">
                <h1>Nova tarefa</h1>
                <form onSubmit={handleSubmit}>
                    {/* <Box mb={4} sx={{ display: 'flex', flexDirection: 'column', mx: "auto", justifyContent: 'center', width: '100%', color: 'text-primary' }}>
                <FormControl fullWidth>
                        <InputLabel required id="select-color">Contato de Emergência</InputLabel>
                        <Select
                            fullwidth
                            labelId="select-color"
                            id="color"
                            value={color}
                            label="Selecione uma cor"
                            onChange={(e) => setColor(e.target.value)}
                        >
                            <MenuItem value={"Pais"}>Pais</MenuItem>
                            <MenuItem value={"Tios"}>Tios</MenuItem>
                            <MenuItem value={"Avós"}>Avós</MenuItem>
                            <MenuItem value={"Padrinhos"}>Padrinhos</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <TextField
                        required
                        fullWidth
                        variant="outlined"
                        label="Tarefa"
                        id="task"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <Button type="submit" style={{ backgroundColor: '#0b1a72', color: '#FFF' }}>Cadastrar</Button>
                </Box> */}




                    <select name="color" onChange={(e) => setColor(e.target.value)} style={{ width: "100%" }}>
                        <option value="">Escolha uma cor</option>
                        <option value="#aed143" className="option1">Opção 1</option>
                        <option value="#fbd249" className="option2">Opção 2</option>
                        <option value="#f49f3f" className="option3">Opção 3</option>
                        <option value="#d35595" className="option4">Opção 4</option>
                        <option value="#51bcb3" className="option5">Opção 5</option>
                    </select>
                    <br />
                    <br />

                    <label htmlFor="task">Descrição da tarefa:</label>
                    <textarea id="task" name="task" rows="5" cols="33" onChange={(e) => setTask(e.target.value)} placeholder="Descreva a tarefa..." />

                    <button type="submit" style={{ backgroundColor: '#0b1a72', color: '#FFF' }}>Cadastrar</button>
                </form>
            </div>
        </>
    )
}

export default NewTask











