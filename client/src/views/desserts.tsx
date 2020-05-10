import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";


interface DessertsProps { }

export const Desserts: React.FC<DessertsProps> = ({ }) => {

  return (
    <Wrapper>

      <Content>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Sed arcu non odio euismod lacinia at. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Fermentum et sollicitudin ac orci phasellus. A erat nam at lectus urna. Venenatis urna cursus eget nunc. Justo laoreet sit amet cursus sit amet dictum sit. Quisque sagittis purus sit amet volutpat consequat mauris. Sed vulputate mi sit amet mauris. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.

        Mauris ultrices eros in cursus turpis massa. Neque volutpat ac tincidunt vitae semper quis lectus nulla at. Vitae elementum curabitur vitae nunc sed. Tempus egestas sed sed risus pretium. Feugiat vivamus at augue eget arcu dictum. Felis donec et odio pellentesque diam. Diam donec adipiscing tristique risus nec feugiat in. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Sed sed risus pretium quam vulputate dignissim. Ut sem viverra aliquet eget sit amet tellus cras adipiscing. Maecenas ultricies mi eget mauris pharetra et. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Purus faucibus ornare suspendisse sed. Gravida rutrum quisque non tellus orci ac auctor. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Scelerisque viverra mauris in aliquam sem fringilla ut. Dignissim convallis aenean et tortor at risus. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Tincidunt vitae semper quis lectus nulla at. Rhoncus urna neque viverra justo nec.
        pien eget mi proin sed libero. In aliquam sem fringilla ut morbi tincidunt augue interdum. Ipsum dolor sit amet consectetur. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Pretium quam vulputate dignissim suspendisse in est. Pretium lectus quam id leo. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Tortor posuere ac ut consequat semper viverra nam. Leo urna molestie at elementum eu facilisis sed. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer. Magna fermentum iaculis eu non. Enim nec dui nunc mattis enim ut.

        Dui nunc mattis enim ut. Convallis tellus id interdum velit. Sit amet purus gravida quis blandit turpis cursus. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Posuere urna nec tincidunt praesent semper feugiat. Volutpat est velit egestas dui id ornare. Neque sodales ut etiam sit amet nisl. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Ultricies integer quis auctor elit sed vulputate mi. Vivamus arcu felis bibendum ut tristique. Duis tristique sollicitudin nibh sit amet. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Penatibus et magnis dis parturient montes nascetur ridiculus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut. Duis tristique sollicitudin nibh sit amet commodo nulla. Tellus in hac habitasse platea dictumst vestibulum rhoncus est.
      </p>
      </Content>

    </Wrapper>
  );
};
// TODO: Adjust the height in Wrapper div
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 40px;
`;
const Content = styled.div`
  width: 100%;
  overflow: auto;
  padding-bottom: 50px;
`;

const CarouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
