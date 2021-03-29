export default function Pricing({ coupon, discount, price }) {
  function trackForFathom() {
    try {
      trackGoal("?????", price * 100); // fathom wants it in cents
    } catch (e) {}
  }

  return <div id="pricing">pricing</div>;
}
