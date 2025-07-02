const express = require('express');
const app = express();
const pool = require('../dataBase/db');

app.use(express.json());

app.get('/task', async (__, res) => {
    try{
        const task = await Pool.query('SELECT * FROM tb_task');
        res.status(200).json(console.rows);
    } catch (err) {
        res.status(404).json('error when searching for tasks', err);
    }
});

app.post('/task', async (req, res) => {
    const {title, completed} = req.body;

    try{
        const task = await Pool.query('INSERT INTO tb_task (title, completed) VALUES ($1, $2) RETURNING *',
            [title, completed]
        );
        res.status(200).json(console.rows[0]);
    } catch (err) {
        console.error('error when adding tasks', err)
        res.status(500).json({error: 'error when adding tasks'})
    }
});

app.put('/task', async (res, req) => {
    const {id} = req.params;
    const {title, completed} = req.body;

    try{
        const task = await Pool.query('UPDATE tb_task SET title = $1, completed = $2 WHERE id = $3 RETURNING *',
            [title, completed, id]
        );

        if (task.rowCount === 0) {
            return res.status(404).json({error: 'error when searching for tasks'});
        } 

        res.status(200).json(console.rows[0]);
    } catch (err) {
        console.error('error when updating tasks', err);
        res.status(500).json({error: 'error when updating tasks'});
    }
});

app.delete('/task', async (req, res) => {
    const {id} = req.params

    try{
        const task = await Pool.query('DELETE FROM tb_task WHERE id = $1 RETURNING *,' [id]);
        if (task.rowCount === 0) {
            res.status(404).json({error: 'error when searching for tasks'});
        }
        res.status(200).json({message: 'task deleted successfully'});
    } catch (err) {
        console.error('error when deleting tasks');
        res.status(500).json({error : 'error when deleting tasks'});
    }
});

const PORT = 3000
app.listen(PORT, () => {
    console.log("server started...")
});