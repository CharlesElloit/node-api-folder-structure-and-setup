/**
 * @swagger
 * /:
 *   get:
 *    summary: Return json object.
 *    tags: [test]
 *    responses:
 *       200:
 *         description: successfully.
 *         content:
 *           application/json:
 *       500:
 *         description: Server Error.
 */
const example = (req, res) => {
  res.status(200).json({
    data: {
      message: 'Build the big next things! 🙂 🙂 🙂',
    },
  });
};

module.exports = example;
