const fs = require('fs');

class VideoAtualController {
    getIndex (req, res){
        fs.readFile('./index.html', (err, html) => res.end(html));
    }
    
    movies(req, res) {
        const { videoName } = req.params;
        const arquivoVideo = "./movies/" + videoName;
    
        fs.stat(arquivoVideo, (err, stats)=>{
            if (err) {
                console.log(err);
                return res.status(404).end("<h1>Video não encontrado</h1")
            }
    
            const { range } = req.header;
            const { size } = stats;
            const start = Number((range || '').replace(/bytes=/, '').split('-')[0]);
            const end = size - 1;
            const chunkSize = (end - start) + 1;
    
            res.set({
                'Content-Range': `bytes ${start}-${end}/${size}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunkSize,
                'Content-Type': 'video/mp4'
            });
    
            res.status(206);
            
            const stream = fs.createReadStream(arquivoVideo, {start, end});
            stream.on('open', () => stream.pipe(res));
            stream.on('error', (streamError) => res.end(streamError));
        })
    
    }
}

export default new VideoAtualController();