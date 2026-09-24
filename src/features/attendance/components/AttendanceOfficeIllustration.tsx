import Svg, { Circle, Defs, G, LinearGradient, Path, Polygon, Rect, Stop } from 'react-native-svg';

type AttendanceOfficeIllustrationProps = {
  width?: number;
  height?: number;
};

export function AttendanceOfficeIllustration({
  width = 175,
  height = 145,
}: AttendanceOfficeIllustrationProps) {
  return (
    <Svg height={height} viewBox="0 0 175 145" width={width}>
      <Defs>
        <LinearGradient id="sunGrad" x1="0%" x2="100%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FDBA74" />
          <Stop offset="100%" stopColor="#F59E0B" />
        </LinearGradient>
        <LinearGradient id="bldgFront" x1="0%" x2="0%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#FFFFFF" />
          <Stop offset="100%" stopColor="#EFF6FF" />
        </LinearGradient>
        <LinearGradient id="bldgSide" x1="0%" x2="0%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#DBEAFE" />
          <Stop offset="100%" stopColor="#BFDBFE" />
        </LinearGradient>
        <LinearGradient id="pinGrad" x1="0%" x2="0%" y1="0%" y2="100%">
          <Stop offset="0%" stopColor="#2563EB" />
          <Stop offset="100%" stopColor="#1D4ED8" />
        </LinearGradient>
        <LinearGradient id="groundGrad" x1="0%" x2="100%" y1="0%" y2="0%">
          <Stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.8" />
          <Stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.4" />
        </LinearGradient>
      </Defs>

      {/* Mặt trời góc phải */}
      <Circle cx="140" cy="28" fill="url(#sunGrad)" opacity={0.88} r="13" />

      {/* Nền đất / Plaza */}
      <Polygon
        fill="url(#groundGrad)"
        points="10,135 110,110 165,130 65,145"
      />

      {/* Toà nhà nền xa bên trái (nhạt hơn) */}
      <Rect fill="#DBEAFE" height="60" opacity={0.6} rx="2" width="22" x="18" y="70" />
      <Rect fill="#BFDBFE" height="48" opacity={0.5} rx="2" width="18" x="6" y="82" />

      {/* Toà nhà nền xa bên phải */}
      <Rect fill="#DBEAFE" height="52" opacity={0.5} rx="2" width="16" x="145" y="78" />
      <Rect fill="#BFDBFE" height="38" opacity={0.4} rx="2" width="14" x="156" y="92" />

      {/* Khối toà nhà chính (trung tâm) */}
      <G>
        {/* Mặt hông toà nhà chính */}
        <Polygon
          fill="url(#bldgSide)"
          points="52,65 68,58 68,124 52,130"
        />
        {/* Mặt chính toà nhà chính */}
        <Polygon
          fill="url(#bldgFront)"
          points="68,58 116,68 116,134 68,124"
        />

        {/* Cửa sổ mặt hông toà chính */}
        <Polygon fill="#93C5FD" opacity={0.7} points="55,73 65,68 65,80 55,84" />
        <Polygon fill="#93C5FD" opacity={0.7} points="55,87 65,83 65,95 55,98" />
        <Polygon fill="#93C5FD" opacity={0.7} points="55,101 65,97 65,109 55,112" />
        <Polygon fill="#93C5FD" opacity={0.7} points="55,115 65,111 65,123 55,126" />

        {/* Các ô cửa sổ kính xanh mặt chính */}
        <Polygon fill="#60A5FA" opacity={0.85} points="73,72 90,75 90,83 73,80" />
        <Polygon fill="#60A5FA" opacity={0.85} points="94,76 111,79 111,87 94,84" />

        <Polygon fill="#60A5FA" opacity={0.85} points="73,86 90,89 90,97 73,94" />
        <Polygon fill="#60A5FA" opacity={0.85} points="94,90 111,93 111,101 94,98" />

        <Polygon fill="#60A5FA" opacity={0.85} points="73,100 90,103 90,111 73,108" />
        <Polygon fill="#60A5FA" opacity={0.85} points="94,104 111,107 111,115 94,112" />

        <Polygon fill="#60A5FA" opacity={0.85} points="73,114 90,117 90,125 73,122" />
        <Polygon fill="#60A5FA" opacity={0.85} points="94,118 111,121 111,129 94,126" />
      </G>

      {/* Khối toà nhà phụ bên phải */}
      <G>
        <Polygon
          fill="url(#bldgSide)"
          points="116,84 122,82 122,136 116,134"
        />
        <Polygon
          fill="url(#bldgFront)"
          points="122,82 148,88 148,137 122,136"
        />
        {/* Cửa sổ toà phụ */}
        <Polygon fill="#93C5FD" opacity={0.8} points="126,93 144,97 144,105 126,101" />
        <Polygon fill="#93C5FD" opacity={0.8} points="126,110 144,114 144,122 126,118" />
      </G>

      {/* Cây xanh / Bụi cỏ chân toà nhà */}
      <Circle cx="44" cy="128" fill="#34D399" r="7" />
      <Circle cx="49" cy="131" fill="#10B981" r="5" />
      <Circle cx="120" cy="135" fill="#34D399" r="6" />
      <Circle cx="126" cy="137" fill="#059669" r="5" />
      <Circle cx="147" cy="137" fill="#34D399" r="5" />
      <Circle cx="154" cy="138" fill="#10B981" r="6" />

      {/* Pin vị trí GPS màu xanh dương nổi bật trên đỉnh toà nhà (như ảnh reference 1) */}
      <G transform="translate(100, 26)">
        {/* Đổ bóng nhỏ của pin */}
        <Circle cx="0" cy="30" fill="#1D4ED8" opacity={0.15} r="7" />
        {/* Hình giọt nước / Map Pin */}
        <Path
          d="M0,-8 C-8,-8 -14,-2 -14,6 C-14,14 -4,24 0,31 C4,24 14,14 14,6 C14,-2 8,-8 0,-8 Z"
          fill="url(#pinGrad)"
        />
        {/* Lỗ tròn trắng ở tâm Pin */}
        <Circle cx="0" cy="5" fill="#FFFFFF" r="5" />
      </G>
    </Svg>
  );
}
