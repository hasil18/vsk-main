export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20 py-8 text-center">
      <p>📍 Ahmedabad, Gujarat</p>
      <p>📞 +91 9979206812</p>
       <p>📞 +91 7874152686</p>
      <p>📧 vskconstruction32@gmail.com</p>
      <p className="mt-4 text-sm">
        © {new Date().getFullYear()} VSK Construction
      </p>
    </footer>
  );
}