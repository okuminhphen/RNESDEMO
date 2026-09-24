import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, CalendarDays, CheckCircle2, Clock, Info, LogIn, LogOut, MapPin, ShieldAlert } from 'lucide-react-native';
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, radius, spacing, typography } from '@/shared/theme';

import { AttendanceOfficeIllustration } from './AttendanceOfficeIllustration';

type CheckoutConfirmSheetProps = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export function CheckoutConfirmSheet({
  visible,
  onClose,
  onConfirm,
}: CheckoutConfirmSheetProps) {
  const insets = useSafeAreaInsets();

  return (
    <Modal
      animationType="slide"
      onRequestClose={onClose}
      transparent
      visible={visible}
    >
      <View style={styles.overlay}>
        {/* Backdrop đóng sheet an toàn khi chạm ra ngoài */}
        <Pressable
          accessibilityLabel="Đóng xác nhận chấm công"
          onPress={onClose}
          style={styles.backdrop}
        />

        <View
          accessibilityViewIsModal
          style={[
            styles.sheet,
            { paddingBottom: Math.max(insets.bottom, spacing.md) },
          ]}
        >
          {/* Thanh gạt trên đầu sheet */}
          <View style={styles.handle} />

          {/* Header sheet: Nút quay lại (đóng sheet) + Tiêu đề */}
          <View style={styles.header}>
            <Pressable
              accessibilityLabel="Quay lại"
              accessibilityRole="button"
              hitSlop={6}
              onPress={onClose}
              style={styles.backButton}
            >
              <ArrowLeft color={colors.text} size={21} strokeWidth={2.2} />
            </Pressable>
            <Text style={styles.heading}>Xác nhận chấm công</Text>
            <View style={styles.headerSpacer} />
          </View>

          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
          >
            {/* Hero Card: Thời gian, Địa điểm + Illustration toà nhà có Pin xanh */}
            <LinearGradient
              colors={['#E8F3FF', '#F7FAFF']}
              end={{ x: 1, y: 1 }}
              start={{ x: 0, y: 0 }}
              style={styles.hero}
            >
              {/* Illustration toà nhà văn phòng với pin vị trí xanh như ảnh reference 1 */}
              <View pointerEvents="none" style={styles.heroIllustration}>
                <AttendanceOfficeIllustration height={135} width={165} />
              </View>

              <Text style={styles.date}>Thứ Tư, 17 Tháng 9, 2025</Text>
              <Text style={styles.time}>17:32:10</Text>

              <View style={styles.statusRow}>
                <View style={styles.statusDot} />
                <Text style={styles.status}>Chấm công ra</Text>
              </View>
              <Text style={styles.secondary}>Ghi nhận thời gian làm việc</Text>

              <View style={styles.locationRow}>
                <MapPin color="#1E40AF" size={19} strokeWidth={2.2} style={{ marginTop: 2 }} />
                <View style={styles.locationCopy}>
                  <Text style={styles.location}>Văn phòng Hà Nội</Text>
                  <Text style={styles.address}>
                    Tòa nhà VFI, Duy Tân, Cầu Giấy, Hà Nội
                  </Text>
                </View>
              </View>

              {/* Tag trạng thái vị trí xem trước an toàn */}
              <View style={styles.gpsRow}>
                <CheckCircle2 color="#059669" size={15} strokeWidth={2.2} />
                <Text style={styles.gpsNotice}>Vị trí mẫu – Bản xem trước</Text>
                <Info color="#6B7280" size={13} />
              </View>
            </LinearGradient>

            {/* Thông tin chấm công (Chi tiết ca, giờ vào, giờ ra, trạng thái) */}
            <View style={styles.details}>
              <Text style={styles.detailsTitle}>Thông tin chấm công</Text>

              <DetailRow
                icon={<CalendarDays color="#2563EB" size={18} />}
                label="Ca làm việc"
                value="08:00 - 17:30"
              />
              <DetailRow
                icon={<LogIn color="#10B981" size={18} />}
                label="Chấm công vào"
                value="07:58"
              />
              <DetailRow
                icon={<LogOut color="#2563EB" size={18} />}
                label="Chấm công ra"
                value="17:32"
              />
              <DetailRow
                icon={<Clock color="#6B7280" size={18} />}
                isLast
                label="Trạng thái"
                valueComponent={
                  <View style={styles.statusBadge}>
                    <View style={styles.statusBadgeDot} />
                    <Text style={styles.statusBadgeText}>Đúng giờ</Text>
                  </View>
                }
              />
            </View>

            {/* Khung thông báo preview an toàn */}
            <View style={styles.notice}>
              <View style={styles.noticeIcon}>
                <MapPin color="#059669" size={20} />
              </View>
              <View style={styles.noticeCopy}>
                <Text style={styles.noticeTitle}>
                  Khu vực chấm công mẫu
                </Text>
                <Text style={styles.noticeText}>
                  Ứng dụng đang ở chế độ xem trước, chưa kích hoạt GPS và máy chủ chấm công. Thao tác xác nhận an toàn và không ghi nhận công thực tế.
                </Text>
              </View>
            </View>
          </ScrollView>

          {/* Hàng nút hành động: Hủy (đóng) & Xác nhận chấm công */}
          <View style={styles.actions}>
            <Pressable
              accessibilityLabel="Hủy"
              accessibilityRole="button"
              onPress={onClose}
              style={[styles.action, styles.cancel]}
            >
              <Text style={styles.cancelText}>Hủy</Text>
            </Pressable>

            <Pressable
              accessibilityLabel="Xác nhận chấm công"
              accessibilityRole="button"
              onPress={onConfirm}
              style={[styles.action, styles.confirm]}
            >
              <Clock color="#FFFFFF" size={17} strokeWidth={2.4} />
              <Text style={styles.confirmText}>Xác nhận chấm công</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

function DetailRow({
  icon,
  label,
  value,
  valueComponent,
  isLast = false,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
  valueComponent?: React.ReactNode;
  isLast?: boolean;
}) {
  return (
    <View style={[styles.detailRow, !isLast && styles.detailDivider]}>
      <View style={styles.detailIcon}>{icon}</View>
      <Text style={styles.detailLabel}>{label}</Text>
      {valueComponent ? (
        valueComponent
      ) : (
        <Text style={styles.detailValue}>{value}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(15, 23, 42, 0.55)',
  },
  sheet: {
    backgroundColor: '#F8FAFC',
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    maxHeight: '90%',
  },
  handle: {
    alignSelf: 'center',
    backgroundColor: '#CBD5E1',
    borderRadius: radius.pill,
    height: 4,
    marginTop: spacing.sm,
    width: 40,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  backButton: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.pill,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  heading: {
    color: colors.text,
    flex: 1,
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
  headerSpacer: {
    width: 38,
  },
  content: {
    gap: spacing.sm,
    paddingBottom: spacing.sm,
    paddingHorizontal: spacing.md,
  },
  hero: {
    borderColor: '#E2E8F0',
    borderRadius: radius.md,
    borderWidth: 1,
    minHeight: 220,
    overflow: 'hidden',
    padding: spacing.md,
    position: 'relative',
  },
  heroIllustration: {
    height: 135,
    position: 'absolute',
    right: -4,
    top: 14,
    width: 165,
  },
  date: {
    color: colors.textSecondary,
    fontSize: typography.caption,
    fontWeight: '600',
  },
  time: {
    color: '#0F172A',
    fontSize: 32,
    fontWeight: '900',
    marginTop: 4,
  },
  statusRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
    marginTop: 4,
  },
  statusDot: {
    backgroundColor: '#10B981',
    borderRadius: radius.pill,
    height: 10,
    width: 10,
  },
  status: {
    color: '#0F172A',
    fontSize: 15,
    fontWeight: '700',
  },
  secondary: {
    color: colors.textSecondary,
    fontSize: 12,
    marginLeft: 16,
    marginTop: 1,
  },
  locationRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: spacing.xs,
    marginTop: spacing.md,
    maxWidth: '70%',
  },
  locationCopy: {
    flex: 1,
  },
  location: {
    color: '#0F172A',
    fontSize: 13,
    fontWeight: '700',
  },
  address: {
    color: colors.textSecondary,
    fontSize: 11,
    lineHeight: 15,
    marginTop: 1,
  },
  gpsRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
    marginTop: spacing.sm,
  },
  gpsNotice: {
    color: '#059669',
    fontSize: 11,
    fontWeight: '700',
  },
  details: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
  },
  detailsTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '800',
    marginBottom: spacing.xs,
  },
  detailRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    minHeight: 46,
  },
  detailDivider: {
    borderBottomColor: '#F1F5F9',
    borderBottomWidth: 1,
  },
  detailIcon: {
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    borderRadius: radius.pill,
    height: 32,
    justifyContent: 'center',
    width: 32,
  },
  detailLabel: {
    color: colors.textSecondary,
    flex: 1,
    fontSize: 13,
  },
  detailValue: {
    color: colors.text,
    fontSize: 14,
    fontWeight: '700',
  },
  statusBadge: {
    alignItems: 'center',
    backgroundColor: '#D1FAE5',
    borderRadius: radius.pill,
    flexDirection: 'row',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  statusBadgeDot: {
    backgroundColor: '#059669',
    borderRadius: radius.pill,
    height: 6,
    width: 6,
  },
  statusBadgeText: {
    color: '#059669',
    fontSize: 11,
    fontWeight: '700',
  },
  notice: {
    alignItems: 'center',
    backgroundColor: '#ECFDF5',
    borderColor: '#A7F3D0',
    borderRadius: radius.md,
    borderWidth: 1,
    flexDirection: 'row',
    gap: spacing.sm,
    padding: spacing.md,
  },
  noticeIcon: {
    alignItems: 'center',
    backgroundColor: '#D1FAE5',
    borderRadius: radius.pill,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  noticeCopy: {
    flex: 1,
  },
  noticeTitle: {
    color: '#065F46',
    fontSize: 13,
    fontWeight: '700',
  },
  noticeText: {
    color: '#047857',
    fontSize: 11,
    lineHeight: 15,
    marginTop: 2,
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.xs,
  },
  action: {
    alignItems: 'center',
    borderRadius: radius.sm,
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: 46,
  },
  cancel: {
    backgroundColor: colors.surface,
    borderColor: '#2563EB',
    borderWidth: 1,
    flex: 1,
  },
  cancelText: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '700',
  },
  confirm: {
    backgroundColor: '#1D4ED8',
    flex: 1.6,
    gap: spacing.xs,
  },
  confirmText: {
    color: colors.surface,
    fontSize: 14,
    fontWeight: '700',
  },
});
