export default function ContributingSection() {
  return (
    <section className="min-h-screen bg-black text-white overflow-hidden relative py-16">
      {/* Background Pattern/Texture */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 60% 80%, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px, 150px 150px, 200px 200px",
        }}
      />

      <div className="h-full w-full flex flex-col justify-center items-center relative px-8">
        {/* Origin Story Text - Top Left */}
        <div className="absolute top-16 left-8 max-w-sm text-white text-sm font-mono leading-relaxed z-10">
          {/* text weight bold */}
          <p className="uppercase tracking-wide text-gray-300 mb-2 font-bold">
            THE ORIGINS OF OUR PROJECT
            <br />
            GO BACK TO THE DARKEST
            <br />
            TIMES - THE TIMES OF WAR,
            <br />
            WHEN MANY ANIMALS WERE
            <br />
            LEFT HOMELESS. THIS
            <br />
            HELPLESSNESS AND PAIN THAT
            <br />
            WE FELT FOR THE ANIMALS
          </p>
          <p className="uppercase tracking-wide text-pink-300 mb-4">
            NOT JUST DIGITAL
            <br />
            CHARACTERS, BUT
            <br />
            SOMETHING MORE
          </p>
          <p className="text-xs leading-relaxed text-gray-300">
            A collection that has a deeper
            <br />
            meaning and significance.
            <br />
            That&apos;s how My Pet Hooligan was
            <br />
            born - a collection of NFTs with
            <br />
            unique traits and characteristics
            <br />
            that brings not only fun and
            <br />
            unpredictability, but also hope
            <br />
            and support.
            <br />
            <br />
            Each NFT sold from our collection
            <br />
            partially funds assistance to
            <br />
            shelters for animals in need
            <br />
            during the war. Since our community
            <br />
            supports animals and playground, it
            <br />
            doesn&apos;t stand and play around.
          </p>
        </div>

        {/* Mission Story Text - Bottom Left */}
        {/* <div className="absolute top-10 left-8 max-w-sm text-white text-sm font-mono leading-relaxed z-10">
          <p className="uppercase tracking-wide text-pink-300 mb-4">
            NOT JUST DIGITAL
            <br />
            CHARACTERS, BUT
            <br />
            SOMETHING MORE
          </p>
          <p className="text-xs leading-relaxed text-gray-300">
            A collection that has a deeper
            <br />
            meaning and significance.
            <br />
            That&apos;s how My Pet Hooligan was
            <br />
            born - a collection of NFTs with
            <br />
            unique traits and characteristics
            <br />
            that brings not only fun and
            <br />
            unpredictability, but also hope
            <br />
            and support.
            <br />
            <br />
            Each NFT sold from our collection
            <br />
            partially funds assistance to
            <br />
            shelters for animals in need
            <br />
            during the war. Since our community
            <br />
            supports animals and playground, it
            <br />
            doesn&apos;t stand and play around.
          </p>
        </div> */}

        {/* Main Graffiti Text - Center */}
        <div className="text-center relative z-20">
          {/* Way Of text */}
          <div
            className="text-pink-400 font-black mb-4 transform -rotate-2"
            style={{
              fontSize: "clamp(3rem, 12vw, 8rem)",
              fontFamily: "Impact, 'Arial Black', sans-serif",
              textShadow: `
                4px 4px 0px rgba(0, 0, 0, 0.8),
                8px 8px 0px rgba(255, 105, 180, 0.3)
              `,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              WebkitTextStroke: "3px rgba(255, 105, 180, 0.8)",
            }}
          >
            WAY OF
          </div>

          {/* Contributing text */}
          <div
            className="text-pink-400 font-black transform rotate-1"
            style={{
              fontSize: "clamp(3rem, 12vw, 8rem)",
              fontFamily: "Impact, 'Arial Black', sans-serif",
              textShadow: `
                4px 4px 0px rgba(0, 0, 0, 0.8),
                8px 8px 0px rgba(255, 105, 180, 0.3)
              `,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              WebkitTextStroke: "3px rgba(255, 105, 180, 0.8)",
            }}
          >
            CONTRIBUTING
          </div>
        </div>

        {/* Social Media Buttons */}
        <div className="absolute inset-0 z-30">
          {/* Discord Button - Top Left of center */}
          <button className="absolute top-1/2 left-1/2 transform -translate-x-80 -translate-y-20 bg-lime-400 text-black px-6 py-3 font-bold uppercase tracking-wide -rotate-12 hover:rotate-0 transition-transform duration-300 shadow-lg hover:shadow-xl text-sm hover:scale-105">
            DISCORD
          </button>

          {/* Twitter Button - Top Right */}
          <button className="absolute top-16 right-16 border-2 border-lime-400 text-lime-400 px-6 py-3 rounded-full font-bold uppercase text-sm hover:bg-lime-400 hover:text-black transition-all duration-300 transform rotate-12 hover:rotate-0 hover:scale-105">
            TWITTER
          </button>

          {/* Instagram Button - Bottom Right */}
          <button className="absolute bottom-16 right-16 bg-lime-400 text-black px-6 py-3 font-bold uppercase tracking-wide transform rotate-6 hover:rotate-0 transition-transform duration-300 shadow-lg hover:shadow-xl text-sm hover:scale-105">
            INSTAGRAM
          </button>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute top-1/4 right-24 w-3 h-3 bg-lime-400 rounded-full animate-pulse opacity-70" />
        <div className="absolute top-1/3 right-32 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-50 animation-delay-300" />
        <div className="absolute bottom-1/4 right-28 w-2 h-2 bg-lime-400 rounded-full animate-pulse opacity-60 animation-delay-600" />
        <div className="absolute top-1/2 left-32 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-40 animation-delay-900" />
        <div className="absolute bottom-1/3 left-40 w-1.5 h-1.5 bg-lime-400 rounded-full animate-pulse opacity-55 animation-delay-1200" />

        {/* Additional floating elements */}
        <div className="absolute top-3/4 left-1/4 w-1 h-1 bg-pink-300 rounded-full animate-pulse opacity-30" />
        <div className="absolute top-1/6 right-1/3 w-1 h-1 bg-lime-300 rounded-full animate-pulse opacity-40" />
      </div>
    </section>
  );
}
