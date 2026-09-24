import Svg, { Circle, Path, Rect } from 'react-native-svg';

export function OfficeIllustration() {
  return (
    <Svg height="100%" pointerEvents="none" viewBox="0 0 220 148" width="100%">
      <Circle cx="117" cy="24" fill="#FFD7A2" opacity={0.8} r="11" />

      <Path d="M7 83c7-12 17-12 24-3 5-7 14-5 18 3" fill="#FFFFFF" opacity={0.6} />
      <Path d="M76 39c6-12 18-12 24-2 4-5 12-5 16 2" fill="#FFFFFF" opacity={0.55} />

      <Path d="M147 61 166 49l19 8v91h-38Z" fill="#D0E5FF" opacity={0.74} />
      <Path d="M179 31 199 19l18 9v120h-38Z" fill="#BAD8FC" opacity={0.72} />
      <Path d="m179 31 20-12 18 9-19 12Z" fill="#E4F1FF" opacity={0.75} />
      <Path d="M198 40 217 28v120h-19Z" fill="#A9CEF8" opacity={0.5} />
      <Path d="M188 49v88m9-92v92m10-98v98" stroke="#EAF5FF" strokeWidth="3" opacity={0.55} />

      <Path d="M24 85 94 49l69 32v67H24Z" fill="#BDDDFE" opacity={0.78} />
      <Path d="m24 85 70-36 69 32-69-25Z" fill="#E8F4FF" opacity={0.9} />
      <Path d="M39 90 94 63l53 24v61H39Z" fill="#A9D0FB" opacity={0.6} />
      <Path d="M39 102 94 76l53 23" fill="none" stroke="#EAF5FF" strokeWidth="4" opacity={0.68} />
      <Path d="M39 117 94 91l53 23" fill="none" stroke="#EAF5FF" strokeWidth="4" opacity={0.6} />
      <Path d="M64 80v68m18-76v76m18-75v75m18-67v67m18-59v59" stroke="#E8F3FF" strokeWidth="3" opacity={0.6} />
      <Rect fill="#EAF5FF" height="56" opacity={0.64} rx="3" width="13" x="11" y="92" />
      <Rect fill="#D7EAFE" height="68" opacity={0.7} rx="3" width="12" x="151" y="80" />
    </Svg>
  );
}
