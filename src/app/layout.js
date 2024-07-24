import '../app/globals.css';
import MyNavbar from "./components/Navbar";
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <MyNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
