import app from './app';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Narayan Enterprises API running on port ${PORT}`);
});
