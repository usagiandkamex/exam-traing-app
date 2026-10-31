import type { Exam } from '../../lib/exam.ts'
import containers from './ai-200/containers.ts'
import data from './ai-200/data.ts'
import integration from './ai-200/integration.ts'
import securityMonitoring from './ai-200/security-monitoring.ts'

const ai200: Exam = {
  id: 'ai-200',
  title: 'AI-200: Azure での AI クラウド ソリューションの開発',
  language: 'ja-JP',
  description: '2026年10月31日に確認した日本語の公式学習ガイドに基づく、日本語の独自問題600問です。ガイド本文に改訂日・適用日の明記はありません。データ管理分野は概要・詳細とも25〜30%ですが、公式検索結果には10月7日版として概要30〜35%、詳細25〜30%とする別の内容もあり、日本語試験への適用版は未確認です。収録比率30%は確認した日本語本文と詳細の共通範囲です。非公式の学習用問題集で、本番の問題・形式・難易度を再現するものではありません。40〜60問はMicrosoft認定試験全般の目安であり、AI-200の固定問題数ではありません。',
  kind: 'certification',
  authorship: 'original',
  officialHosts: ['learn.microsoft.com'],
  blueprint: {
    url: 'https://learn.microsoft.com/ja-jp/credentials/certifications/resources/study-guides/ai-200',
    reviewedOn: '2026-10-31',
    questionCount: { min: 40, max: 60 },
  },
  usageReview: {
    url: 'https://learn.microsoft.com/en-us/credentials/support/certification-exam-candidate-agreement',
    reviewedOn: '2026-10-31',
    notes: '受験者契約、試験セキュリティポリシー（https://learn.microsoft.com/en-us/credentials/support/exam-and-assessment-lab-security-policies）、Microsoft Learn利用条件（https://learn.microsoft.com/en-us/legal/termsofuse）を確認。実際の試験・公式練習問題・ダンプは取得・転載・翻訳せず、公開技術資料の事実を根拠に問題・選択肢・解説を独自作成する。資料本文・図表・ロゴは転載しない。人による内容・権利レビューはマージ前に別途必要で、自動検証は代替しない。2026-10-31に取得した日本語・英語のガイド本文では、データ管理分野は概要・詳細とも25〜30%で、詳細項目にも差は見られないが、改訂日・適用日の記載はない。Microsoft Learn検索結果には2026年10月7日現在の英語ガイドとして概要30〜35%、詳細25〜30%、変更履歴に比率増加とする別の内容があり、現在の日本語試験への適用版は未確認。日本語本文に従い比率を25〜30%とし、30%（180/600問）の収録を維持する。問題数40〜60問の根拠は https://learn.microsoft.com/en-us/credentials/support/exam-duration-exam-experience （確認日：2026-10-31）にあるMicrosoft認定試験全般の一般目安で、AI-200固有の確定値・上限ではない。収録数の計画には目安の上限60問を使用。',
  },
  domains: [
    { id: 'containers', name: 'Azure でコンテナー化されたソリューションを開発する', weight: { min: 20, max: 25 } },
    { id: 'data', name: 'Azure データ管理サービスを使用して AI ソリューションを開発する', weight: { min: 25, max: 30 } },
    { id: 'integration', name: 'Azure サービスに接続して使用する', weight: { min: 20, max: 25 } },
    { id: 'security-monitoring', name: 'Azure ソリューションのセキュリティ保護、監視、トラブルシューティング', weight: { min: 20, max: 25 } },
  ],
  questions: [...containers, ...data, ...integration, ...securityMonitoring],
}

export default ai200
