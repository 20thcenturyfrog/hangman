const HEAD = <div className="drawing-head" />;
const BODY = <div className="drawing-body" />;
const RIGHT_ARM = <div className="drawing-right-arm" />;
const LEFT_ARM = <div className="drawing-left-arm" />;
const RIGHT_LEG = <div className="drawing-right-leg" />;
const LEFT_LEG = <div className="drawing-left-leg" />;

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <div className="drawing">
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div className="drawing-dropdown" />
      <div className="drawing-top" />
      <div className="drawing-upright" />
      <div className="drawing-bottom" />
    </div>
  );
}
