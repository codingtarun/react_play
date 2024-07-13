export default function Footer() {
  const currentHour = new Date().getHours();
  const openTime = 10;
  const closeTime = 22;
  const isOpen = openTime <= currentHour <= closeTime;

  return (
    <footer className="text-center">{isOpen && <h3>We're Open</h3>}</footer>
  );
}
