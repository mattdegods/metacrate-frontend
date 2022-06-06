import Image from "next/image";
import Typography from "../components/shared/Typography";
import QuestionRow from "../components/FAQ/QuestionRow";
import duppie_hand from "../components/assets/images/duppie_hand.png";

const FAQ = () => {
  return (
    <div className="w-full py-10 text-center">
      <div className="md:flex md:justify-evenly md:mx-12">
        {/* left col */}
        <div className="text-center md:text-left mb-6">
          <div>
            <Typography variant="header" color="secondary" styles="text-[20px] pb-4">
              WHAT YOU NEED TO KNOW
            </Typography>
            <Typography
              variant="subheader"
              color="title"
              fontFamily="bingodilan"
              fontSize={['md','lg','xl']}
            >
              Frequently Asked<br />Questions
            </Typography>
          </div>
          <div className="sm:py-8">
            <Image src={duppie_hand} alt="duppie hand" />
          </div>
        </div>
        {/* right col */}
        <div className="sm:w-[700px] lg:w-[800px] sm:pr-0 px-10">
          <QuestionRow
            question="Where is the art?"
            answer={[
              "The art will be revealed about 2 weeks before the mint.",
              "We are taking a unique direction with the art.",
              "We don't want a hundred derivatives already launched before the mint."
            ]}
          />
          <QuestionRow
            question="How do I get a WL?"
            answer={[
              `The best way to have a guaranteed WL is to hold a DeadGod. `,
              `Every DeadGod will be guaranteed the ability to mint 1 Duppie.`,
              `There will be a few more opportunities to get a whitelist. Join the disc:Discord & follow our tw:Twitter to stay up to date on this.`
            ]}
          />
          <QuestionRow
            question="What if I have a DeGod and not a DeadGod?"
            answer={[
                "You will have until the mint in June to upgrade to a DeadGod for a guaranteed spot.", 
                "This is designed to reward those that spent the 1000+ $DUST to upgrade their DeadGod. It was made clear from day one that there would be unique benefits to holding a DeadGod.",
                "If you have just a DeGod, you at least will be generating $DUST."
              ]}
          />
          <QuestionRow
            question="Where do I get $DUST from?"
            answer={[
              "If you have a DeGod/DeadGod you can stake to earn $DUST.",
              "If you don't, you can use jup:jup.ag to get some $DUST."
            ]}
          />
          <QuestionRow
            question="Why are you building Duppies?"
            answer={["The goal for Duppies is to stand alone as its own brand & IP. ", 
            "The universe & style of Duppies are different than DeGods/DeadGods.",
            "We don't think anyone wants to own the “baby” version of an original collection.",
            "We think this is the direction all “second” mints/drops NFT projects should take",
            "It's more exciting for existing holders, but double as exciting for new incoming holders - because they can believe in the future of the collection beyond just being a smaller version of the “parent” collection",
          ]}
          />
          <QuestionRow
            question="Who will the team working on Duppies be?"
            answer={[
              "The DeGods team will bring this project to life. ", 
              "But after a few months we will be bringing on a CEO just for the Duppies brand.", 
              "We will instruct the CEO that their goal is to make the biggest NFT brand in the world… even bigger than DeGods.",
              "DeGods will be competing with our own project. Should be fun."
            ]}
          />
          <QuestionRow
            question="What can you leak about Duppies?"
            answer={[
              "The focus is building a brand with the strongest community on the internet by using aligned incentives",
              "We are going to build the most popular NFT brand… together."
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
