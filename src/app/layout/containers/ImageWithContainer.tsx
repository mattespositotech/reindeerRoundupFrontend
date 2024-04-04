import { Grid, GridColumn, Image } from "semantic-ui-react";

interface ImageWithContainerProps {
  imgUrl: string;
  content: JSX.Element;
  reversed?: boolean;
}

function textColumn(content: JSX.Element) {
  return (
    <GridColumn width={8} key='text'>
        {content}
    </GridColumn>
  )
}

function imageColumn(imgUrl: string) {
  return (
    <GridColumn width={8} key='image'>
      <Image src={imgUrl} />
    </GridColumn>
  )
}

export default function ImageWithContainer({imgUrl, content, reversed}: ImageWithContainerProps) {
  const columns = reversed ? [textColumn(textColumn(content)), imageColumn(imgUrl)] : [imageColumn(imgUrl), textColumn(textColumn(content))];

  return (
    <Grid centered verticalAlign="middle">
      {columns}
    </Grid>
  )
}