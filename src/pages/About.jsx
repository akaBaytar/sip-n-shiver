import styled from 'styled-components';

const About = () => {
  return (
    <Wrapper>
      <h3>About Us</h3>
      <p>Welcome to Sip 'n Shiver, where the art of mixology meets the thrill of flavor exploration!</p>
      <p>
        We're not just an site; we're your passport to a world of tantalizing cocktails and unforgettable sips. At Sip
        'n Shiver, we believe in the magic of a perfectly crafted cocktail—the kind that makes your taste buds dance and
        your spirits soar.
      </p>
      <p>
        Our mission is to be your trusted companion on this liquid adventure, guiding you through the realms of mixology
        with style and a touch of frosty elegance. Why choose Sip 'n Shiver? Because we're not just about recipes; we're
        about crafting experiences. From classic concoctions to innovative blends, we bring you a curated collection
        that promises to elevate your sipping moments. Whether you're a seasoned mixologist or a curious beginner, Sip
        'n Shiver is your go-to source for liquid inspiration.
      </p>
      <p>
        Join us on this journey of shaken, stirred, and iced wonders. Sip, savor, and let the shivers of delight roll
        in. Cheers to the art of the pour and the joy of the sip!
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  p {
    line-height: 1.5;
    color: var(--grey-500);
    margin-top: 1.25rem;
  }
`;

export default About;
