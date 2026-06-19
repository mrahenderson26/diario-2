import './Footer.css';

export default function Footer({ footer, name }) {
  return (
    <footer className="site-footer">
      <p>{footer.text}</p>
      <p>&copy; {new Date().getFullYear()} {name}</p>
    </footer>
  );
}

