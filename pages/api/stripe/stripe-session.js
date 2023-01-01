const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function CreateStripeSession(req, res) {
  const { id } = req.body;
// const item = req.body
// const price = item.cost
// const packName = item.packageName
// const description = item.description
// console.log(packName , price ,description);
console.log(id);

  
  const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/dashboard/payment'
      : 'https://books-society.vercel.app/dashboard/payment';

      const prices  = await stripe.prices.create({
        product: id,
        unit_amount: 5900,
        currency: 'usd',
        recurring: {interval: 'month'},
      });


  const session = await stripe.checkout.sessions.create({
    billing_address_collection: 'auto',
    line_items: [
      {
        price:prices.id,
        // For metered billing, do not pass quantity
        quantity: 1,

      },
    ],
    mode: 'subscription',
    success_url: redirectURL + '?status=success',
    cancel_url: redirectURL + '?status=cancel',
  });

  res.json({ id: session.id });
}

export default CreateStripeSession;