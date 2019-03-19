const Ad = require('../models/Ad')
const User = require('../models/User')
const PurchaseMail = require('../jobs/PurchaseMail')
const Queue = require('../services/Queue')
const Purchase = require('../models/Purchase')

class PurchaseController {
  async store (req, res) {
    const { ad, content } = req.body

    const purchaseAd = await Ad.findById(ad).populate('author')
    const user = await User.findById(req.userId)

    const purchaseIntent = await Purchase.create({
      ad,
      content,
      author: req.userId
    })

    Queue.create(PurchaseMail.key, {
      ad: purchaseAd,
      user,
      content
    }).save()

    return res.send(purchaseIntent)
  }

  async index (req, res) {
    const filters = {}

    if (req.query.title) {
      filters.title = new RegExp(req.query.title, 'i')
    }

    const purchases = await Purchase.paginate(filters, {
      page: req.query.page || 1,
      limit: req.query.size || 20,
      populate: ['ad', 'author'],
      sort: '-createdAt'
    })

    return res.json(purchases)
  }

  async destroy (req, res) {
    await Purchase.findByIdAndDelete(req.params.id)

    return res.send()
  }
}

module.exports = new PurchaseController()
