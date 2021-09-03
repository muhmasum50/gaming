import GameItem from '../../molecules/GameItem'

export default function FeatureGame() {
    return (
        <section className="featured-game pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">
            Our Featured
            <br /> Games This Year
          </h2>
          <div
            className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
            data-aos="fade-up"
          >
            <GameItem title=" Super Mechs" thumbnail="Thumbnail-1" category="Mobile" />
            <GameItem title=" Call of Duty: Modern" thumbnail="Thumbnail-2" category="Mobile" />
            <GameItem title="Mobile Legends" thumbnail="Thumbnail-3" category="Mobile" />
            <GameItem title="Clash of Clans" thumbnail="Thumbnail-4" category="Mobile" />
            <GameItem title="Valorant" thumbnail="Thumbnail-5" category="Dekstop" />
          </div>
        </div>
      </section>
    )
}
