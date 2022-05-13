import Banner from "~/components/Banner";
import Header from "~/components/Header";
import HeadWrapper from "~/components/HeadWrapper";
import LargeCard from "~/components/LargeCard";
import MediumCard from "~/components/MediumCard";
import SmallCard from "~/components/SmallCard";

export default function Home({ explorerData, cardsData }) {
  return (
    <div className="">
      <HeadWrapper title="Dio Airbnb" />

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {explorerData?.map((item) => (
              <SmallCard
                key={item.link}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map((card) => (
              <MediumCard key={card.img} img={card.img} title={card.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
        />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const explorerData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      explorerData,
      cardsData,
    },
  };
}
