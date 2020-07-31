module.exports = {
  [`GET /api/user.json`](req, res) {
    res.json({
        success: true,
        message: '',
        data: {
            value: [
                { city: '成都' },
            ],
            pages: 20,
        }
    })
  }
};
