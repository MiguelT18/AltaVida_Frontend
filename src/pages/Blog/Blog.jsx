import ContactButtons from "@src/components/ContactButtons";
import Footer from "@src/components/Footer";
import Header from "@src/components/Header";
import Navbar from "@src/components/Navbar";
import Contact from "@src/layouts/Contact";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <ContactButtons />
      <Header
        title="Blog"
        description="Ponte al día con las últimas noticias"
      />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
