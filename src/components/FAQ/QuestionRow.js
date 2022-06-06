import { useState } from "react";
import Typography from "../shared/Typography";

const QuestionRow = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleHandler = () => {
    if (expanded) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  };

  const regex = (someText, id) => {
    // pass each string in array (after map)
    // run string through .split() for three tags
    // one tag:
    // pre-tag string (print cleanly) [0]
    // tag [1] (toss out)
    // rest of string [2]
    // rest of string should be split on spaces w/ limit of 1
    // second array should:
    // surround item [0] with the <a> tag
    // print item [1] normally

    if (someText.search("tw:") !== -1) {
      var answerStrings = someText.split(/(disc:|tw:)/g);
      // console.log("Split string: ", answerStrings);
      if (answerStrings.length > 0) {
        // split up the string into substrings, removing the keywords
        var discordString = answerStrings[2].split(" ", 1)[0];
        var twitterString = answerStrings[4].split(" ", 1)[0];
        // remove the hyperlinked keywords from their substrings
        var restOfDiscordString = answerStrings[2];
        restOfDiscordString = restOfDiscordString.split(discordString)[1];
        var restOfTwitterString = answerStrings[4];
        restOfTwitterString = restOfTwitterString.split(twitterString)[1];

        return (
          <div className="text-body-lg text-body" key={id}>
            {answerStrings[0]}
            <a
              className="underline text-duppyGreen"
              href="http://discord.gg/duppies"
              target="_blank" 
              rel="noreferrer"
            >
              {discordString}
            </a>
            {restOfDiscordString}
            <a
              className="underline text-duppyGreen"
              href="http://twitter.com/duppiesnft"
              target="_blank" 
              rel="noreferrer"
            >
              {twitterString}
            </a>
            {restOfTwitterString}
          </div>
        );
      } else {
        return (
          <div className=" text-body text-body-lg" key={id}>
            {someText}
            <br />
            <br />
          </div>
        );
      }
    } else if (someText.search("jup:") !== -1) {
      var answerStrings = someText.split(/(jup:)/g);
      // console.log("Split string: ", answerStrings);
      if (answerStrings.length > 0) {
        var jupiterString = answerStrings[2].split(" ", 1)[0];
        var restOfJupiterString = answerStrings[2];
        restOfJupiterString = restOfJupiterString.split(jupiterString)[1];

        return (
          <div className="text-body-lg text-body" key={id}>
            {answerStrings[0]}
            <a
              className="underline text-duppyGreen"
              href="https://jup.ag/swap/SOL-DUST"
              target="_blank" 
              rel="noreferrer"
            >
              {jupiterString}
            </a>
            {restOfJupiterString}
          </div>
        );
      } else {
        return (
          <div className=" text-body text-body-lg" key={id}>
            {someText}
            <br />
            <br />
          </div>
        );
      }
    } else {
      return (
        <div className=" text-body text-body-lg" key={id}>
          {someText}
          <br />
          <br />
        </div>
      );
    }
  };

  return (
    <div className="border-b-2 border-[#3142EA33]/10">
      <div className="flex justify-between items-center py-[25px] transition-transform duration-700 ease-in-out">
        <div onClick={toggleHandler} className="hover:cursor-pointer text-left">
          <Typography variant="body" fontFamily="base-b" styles="text">
            {question}
          </Typography>
        </div>
        <div
          onClick={toggleHandler}
          className="hover:cursor-pointer text-duppyGreen font-base-r text-[30px] pl-2"
        >
          {expanded ? "-" : "+"}
        </div>
      </div>
      <div className={`${expanded ? "block" : "hidden"} text-left pb-[25px]`}>
        {answer.map((item, id) => regex(item, id))}
      </div>
    </div>
  );
};

export default QuestionRow;
