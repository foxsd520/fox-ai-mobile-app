import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const FOX_PROFILE = {
  name: 'Fox',
  email: 'foxsd520@gmail.com',
  title: 'مطور | متخصص في الأمن والبرمجة',
  summary:
    'أنا Fox، أعمل في البرمجة، تطوير المواقع، الأمن السيبراني، وأنظمة الأعمال. أساعدك في بناء حلول رقمية عملية واحترافية.',
  services: [
    'تطوير مواقع ويب احترافية',
    'تطوير تطبيقات الأعمال',
    'استشارات أمنية',
    'بناء أنظمة إدارة',
    'إدارة المشاريع والمهام',
    'حلول ذكية للأعمال',
  ],
};

function buildFoxReply(input) {
  const text = (input || '').trim();
  const lower = text.toLowerCase();

  if (!text) {
    return 'أنا Fox، جاهز لمساعدتك في البرمجة، الأمن، تطوير المواقع، أو بناء حلول الأعمال. ما الذي تريد إنجازه؟';
  }

  if (/(برمجة|code|python|javascript|react|node|api)/.test(lower)) {
    return 'أستطيع مساعدتك في تطوير البرمجيات، واجهات الويب، APIs، أنظمة الأعمال، والبرمجة الخلفية. يمكننا بناء المشروع من الفكرة حتى النشر.';
  }

  if (/(أمن|security|cyber|pen-test|vulnerability|owasp)/.test(lower)) {
    return 'أستطيع تقييم الثغرات، مراجعة الأمان، تحليل التطبيقات، وحماية الأنظمة ضد الهجمات الشائعة مثل XSS و CSRF و SQL Injection.';
  }

  if (/(موقع|website|web|landing)/.test(lower)) {
    return 'أستطيع تصميم وبناء مواقع احترافية، صفحات هبوط، منصات الأعمال، ولوحات إدارة متقدمة.';
  }

  if (/(تطبيق|app|mobile|android|ios)/.test(lower)) {
    return 'يمكنني بناء تطبيقات mMobile والتطبيقات عبر 플랫폼ات مختلفة، مع تصميم احترافي ومميزات عملية للأنظمة الإلكترونية.';
  }

  return 'أنا Fox، أقدم حلولاً تقنية عملية في البرمجة، الأمن السيبراني، تطوير المواقع، وبناء أنظمة الأعمال. أستطيع مساعدتك في مشروعك خطوة بخطوة.';
}

export default function App() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('أنا Fox، جاهز للمساعدة.');

  const stats = useMemo(
    () => [
      { label: 'العملاء', value: '24' },
      { label: 'المشاريع', value: '12' },
      { label: 'المهام', value: '81' },
      { label: 'الذكاء', value: 'ON' },
    ],
    []
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.eyebrow}>Fox AI</Text>
            <Text style={styles.title}>{FOX_PROFILE.name}</Text>
          </View>
          <View style={styles.mailBox}>
            <Text style={styles.mailName}>{FOX_PROFILE.name}</Text>
            <Text style={styles.mailText}>{FOX_PROFILE.email}</Text>
          </View>
        </View>

        <View style={styles.heroCard}>
          <Text style={styles.heroTitle}>{FOX_PROFILE.title}</Text>
          <Text style={styles.heroBody}>{FOX_PROFILE.summary}</Text>
        </View>

        <View style={styles.statsGrid}>
          {stats.map((item) => (
            <View key={item.label} style={styles.statCard}>
              <Text style={styles.statLabel}>{item.label}</Text>
              <Text style={styles.statValue}>{item.value}</Text>
            </View>
          ))}
        </View>

        <View style={styles.aiCard}>
          <Text style={styles.sectionTitle}>ذكاء Fox الشخصي</Text>
          <TextInput
            multiline
            value={message}
            onChangeText={setMessage}
            placeholder="اكتب طلبك مثل: أريد موقع، أو برمجة، أو أمن..."
            placeholderTextColor="#9aa7b5"
            style={styles.input}
          />

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => setReply(buildFoxReply(message))}
          >
            <Text style={styles.primaryButtonText}>اسأل Fox</Text>
          </TouchableOpacity>

          <View style={styles.replyBox}>
            <Text style={styles.replyText}>{reply}</Text>
          </View>
        </View>

        <View style={styles.servicesCard}>
          <Text style={styles.sectionTitle}>الخدمات</Text>
          {FOX_PROFILE.services.map((service) => (
            <View key={service} style={styles.serviceItem}>
              <Text style={styles.serviceText}>{service}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#08111f',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  eyebrow: {
    color: '#7dd3fc',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 6,
  },
  title: {
    color: '#f8fafc',
    fontSize: 30,
    fontWeight: '700',
  },
  mailBox: {
    backgroundColor: '#111827',
    borderWidth: 1,
    borderColor: '#1f2937',
    borderRadius: 12,
    padding: 10,
    minWidth: 120,
  },
  mailName: {
    color: '#f8fafc',
    fontSize: 14,
    fontWeight: '700',
  },
  mailText: {
    color: '#cbd5e1',
    fontSize: 11,
    marginTop: 4,
  },
  heroCard: {
    backgroundColor: '#111827',
    borderColor: '#1f2937',
    borderWidth: 1,
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
  },
  heroTitle: {
    color: '#dbeafe',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  heroBody: {
    color: '#dbeafe',
    fontSize: 14,
    lineHeight: 22,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#111827',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#1f2937',
    padding: 16,
    marginBottom: 12,
  },
  statLabel: {
    color: '#cbd5e1',
    fontSize: 12,
    marginBottom: 10,
  },
  statValue: {
    color: '#f8fafc',
    fontSize: 24,
    fontWeight: '700',
  },
  aiCard: {
    backgroundColor: '#111827',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#1f2937',
    padding: 18,
    marginBottom: 18,
  },
  sectionTitle: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 12,
    minHeight: 100,
    padding: 14,
    textAlign: 'right',
    fontSize: 14,
  },
  primaryButton: {
    backgroundColor: '#2563eb',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  primaryButtonText: {
    color: '#f8fafc',
    fontWeight: '700',
    fontSize: 16,
  },
  replyBox: {
    backgroundColor: '#0f172a',
    borderWidth: 1,
    borderColor: '#1e293b',
    borderRadius: 12,
    padding: 14,
    marginTop: 14,
  },
  replyText: {
    color: '#dbeafe',
    fontSize: 14,
    lineHeight: 22,
  },
  servicesCard: {
    backgroundColor: '#111827',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#1f2937',
    padding: 18,
  },
  serviceItem: {
    backgroundColor: '#0f172a',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1e293b',
    padding: 12,
    marginBottom: 10,
  },
  serviceText: {
    color: '#e2e8f0',
    fontSize: 14,
  },
});
