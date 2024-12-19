import app from './app';

const PORT = process.env.PORT || 3306;

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta: http://localhost:${PORT}`);
});
