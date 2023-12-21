import React from "react";
import {
  Card,
  CardBody,
  Heading,
  Text,
  Flex,
  CardHeader,
  CardFooter,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

function FeedbackCard(props) {
  const { datas } = props;
  let emojis = ["👍", "😃", "💯", "🎉", "😎", "📚", "🎓", "😊", "😇"];
  let emojiDown = "👎";
  function getRandomEmoji() {
    var randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
  }
  const stars = Array.from({ length: datas.rating }, (_, index) => index + 1);
  return (
    <div>
      <Card height={200} width={400} marginRight={10} marginLeft={10}>
        <CardBody>
          <Heading size="md">{datas.feedbackDesc}</Heading>

          <Text py="2">{datas.enrollment.user.firstName}</Text>
          <Flex>
            {stars.map((index) => {
              return <FaStar key={index} color="#ffc107" size={30} />;
            })}
          </Flex>
        </CardBody>
        <CardFooter>
          <Flex fontSize={30}>
            {datas.rating == 1 ? (
              emojiDown
            ) : (
              getRandomEmoji()
            )}
          </Flex>
        </CardFooter>
      </Card>
    </div>
  );
}

export default FeedbackCard;
