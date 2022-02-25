import Video from "../models/Video";

class VideoController {
	async store(req, res) {
		const video = await Video.create(req.body);
		return res.json(video);
	}

	async index(req, res) {
		const videos = await Video.findAll();
		return res.json(videos);
	}

	async update(req, res) {
		let video = await Video.findByPk(req.params.id);
		video = await video.update(req.body);
		return res.json(video);
	}

	async delete(req, res) {
		let video = await Video.findByPk(req.params.id);
		video = await video.destroy(req.body);
		return res.json(video);
	}

	async show(req, res) {
		let video = await Video.findByPk(req.params.id);
		return res.json(video);
	}
}

export default new VideoController();