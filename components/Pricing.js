export default function Pricing() {
  function trackForFathom() {
    try {
      const price = discount ? (22 * ((100 - discount) / 100)).toFixed(2) : 22;
      trackGoal("?????", price * 100); // fathom wants it in cents
    } catch (e) {}
  }

  return <div></div>;
}
