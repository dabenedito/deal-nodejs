const express = require("express");
const fs = require("fs");

const app = express();

app.get('/', (req, res) => {
	fs.readFile('./index.html', (err, html) => res.end(html));
});

app.get('/movie/:videoName', (req, res) => {
	const { videoName } = req.params;
	const videoFile = './movies/' + videoName;

	fs.stat(videoFile, (err, status) => {
		if(err) {
			console.log(err);
			return res.status(404).end("<h1>Vídeo não encontrado</h1>");
		}

		const { range } = req.header;
		const { size } = status;

		const start = Number(( range || '' ).replace(/bytes=/, '').split('-')[ 0 ]);
		const end = size - 1;
		const chunkSize = ( end - start ) + 1;

		res.set({
			'Content-Range': `bytes ${ start }-${ end }/${ size }`,
			'Accept-Ranges': 'bytes',
			'Content-Length': chunkSize,
			'Content-Type': 'video/mp4'
		});

		res.status(206);

		const stream = fs.createReadStream(videoFile, { start, end });
		stream.on('open', () => stream.pipe(res));
		stream.on('error', (streamError) => res.end(streamError));
	});
});

app.listen(3000, () => console.log("Stream ouvindo na porta 3000"));