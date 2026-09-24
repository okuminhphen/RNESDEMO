import Svg, { Circle, Ellipse, G, Path, Rect } from 'react-native-svg';

export function PayrollIllustration() {
  return (
    <Svg height={106} viewBox="0 0 150 106" width={150}>
      <Ellipse cx="82" cy="100" fill="#EAF3FF" rx="66" ry="5" />
      <Path d="M67 9h62a7 7 0 0 1 7 7v74H60V16a7 7 0 0 1 7-7Z" fill="#D8EAFE" />
      <Path d="M69 9h60v7H69a4 4 0 0 1-4-4 4 4 0 0 1 4-3Z" fill="#C0DAFA" />
      <Rect fill="#AFCFF6" height="4" rx="2" width="39" x="72" y="25" />
      <Rect fill="#BBD7F8" height="4" rx="2" width="48" x="72" y="36" />
      <Rect fill="#BBD7F8" height="4" rx="2" width="32" x="72" y="47" />
      <Path d="M114 45v9h-8l4-5v-7h4Z" fill="#9CC5F3" />
      <G fill="#BCD9FA">
        <Path d="M48 72c-6-14-7-23-1-29 8 6 10 16 7 29Z" />
        <Path d="M49 76c-13-7-17-15-15-22 11 2 17 9 18 20Z" />
        <Path d="M52 68c2-14 7-21 15-24 3 11-2 20-14 28Z" />
        <Path d="M135 76c0-12 5-18 13-20 2 8-1 15-12 23Z" />
      </G>
      <Path d="M43 93V69m93 23V75" stroke="#A9CEF8" strokeWidth="2" />
      <Path d="M30 62h57a7 7 0 0 1 7 7v25a7 7 0 0 1-7 7H29a9 9 0 0 1-9-9V72a10 10 0 0 1 10-10Z" fill="#75BAF6" />
      <Path d="M20 72h68a6 6 0 0 1 6 6v16a7 7 0 0 1-7 7H29a9 9 0 0 1-9-9V72Z" fill="#4D9FEF" />
      <Rect fill="#89C4F8" height="25" rx="6" width="26" x="73" y="74" />
      <Circle cx="82" cy="86" fill="#E6F4FF" r="5" />
      <Circle cx="128" cy="86" fill="#FFCB72" r="19" />
      <Circle cx="128" cy="86" fill="#FFE0A2" r="15" />
      <Circle cx="128" cy="86" fill="#F8BE5F" r="12" />
      <Path d="M132 79v12h-6a5 5 0 0 1 0-10h7" fill="none" stroke="#FFF1D1" strokeLinecap="round" strokeWidth="2" />
    </Svg>
  );
}
