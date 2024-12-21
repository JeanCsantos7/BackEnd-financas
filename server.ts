import app from './app';

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
    console.log(
        `Servidor iniciado na porta: http://controle-financeiro-backend-production:${PORT}`,
    );
});
