import Footer from './components/Footer';
import './styles/globals.css'

// Metadata for the HTML document (can be used in SEO or page header tags)
export const metadata = {
  title: "Elbrit LifeScience",
  description: "Elbrit LifeScience",
};

// RootLayout component which serves as the layout for the entire app
export default function RootLayout({ children }) {
  return (
    <html lang="en">  {/* Declares the language for the document */}
      <head>
        {/* Importing Google Fonts for styling text */}
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700&display=swap" 
          rel="stylesheet" // This link tag imports the Jost font family for text styling
        />
        
        {/* Preloading the Google Fonts to improve performance by fetching them early */}
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700&display=swap"
          rel="preload"
          as='style'  // Preloads the Google font as a stylesheet to optimize page loading
        />
        
        {/* Preloading an image to ensure it loads faster when required */}
        <link rel="preload" href="/heroImg.webp" as="image" /> 
      </head>
      
      <body>
        {/* Header section containing the website's logo */}
        <header style={{ textAlign: "left", paddingLeft: "5rem" }}>
          <img src="/logo.webp" alt="Logo" className='headingLogo' /> 
        </header> 
        
        {/* Main content area where dynamic children components will be injected */}
        <main>{children}</main>  
        
        {/* Footer component that appears at the bottom of the page */}
        <Footer /> 
      </body>
    </html>
  );
}