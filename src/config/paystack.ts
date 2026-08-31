// Paystack TEST credentials for the demo checkout flow.
//
// IMPORTANT: only the public key belongs here. The public key is safe to
// ship in client-side code by design (it can only initialize a payment,
// not move money or read account data). The secret key must NEVER be
// included in frontend code or committed anywhere it could ship to a
// browser - it should live as an encrypted environment variable on
// whatever server verifies the payment (e.g. a Cloudflare Worker route),
// set via `wrangler secret put PAYSTACK_SECRET_KEY`, and used only in
// that server-side code to verify transactions after the fact.
export const PAYSTACK_PUBLIC_KEY_TEST = "pk_test_1e4860781d23628552bd63019cd5187dd29caa05";
