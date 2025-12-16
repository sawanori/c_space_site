"use client";

import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/animations";

export default function StaffVoice() {
    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Image */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUpVariant}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative aspect-[3/4] md:aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-sm">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: "url('/pre.jpg')" }}
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy-dark)]/90 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 text-white z-10">
                                <p className="text-2xl font-bold mb-1">Masato Watanabe</p>
                                <p className="text-sm text-[var(--color-gold)] font-medium tracking-wide">代表取締役社長 渡邉 昌人</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUpVariant}
                        className="w-full lg:w-1/2"
                    >
                        <p className="text-[var(--color-gold)] font-bold tracking-widest uppercase mb-4 text-sm">
                            Top Message
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-8 leading-tight">
                            10坪のアパートから始まった、<br />
                            <span className="text-[var(--color-gold)]">お客様との信頼</span>の物語。
                        </h2>

                        <div className="prose text-gray-600 leading-relaxed mb-8">
                            <p className="mb-4">
                                「私たちは図面を引くだけではありません。現場の空気、素材の質感、そしてお客様の未来の成功までを設計します。」
                            </p>
                            <p>
                                2003年、わずか10坪のアパートの一室で、たった2名で始まったシー・スペース。現在では2フロア140坪のオフィスに48名の仲間が集うまでになりました。
                            </p>
                            <p>
                                この成長の理由はシンプルです。一級建築施工管理技士としての確かな技術と、「仕事が趣味」と言えるほどの情熱で、一つひとつの現場に誠実に向き合い続けてきたからです。
                            </p>
                        </div>

                        {/* Profile Block */}
                        <div className="bg-[var(--color-gray-50)] p-6 rounded-sm border-l-4 border-[var(--color-gold)]">
                            <h4 className="text-[var(--color-navy)] font-bold mb-4 text-sm uppercase tracking-wider">Profile</h4>
                            <ul className="text-sm text-gray-600 space-y-3">
                                <li className="flex gap-4">
                                    <span className="shrink-0 font-bold text-[var(--color-navy-light)] w-16">経歴</span>
                                    <span>1969年生まれ。群馬県高崎市出身。都内中堅ゼネコン工務部にて14年勤務後、2003年5月に株式会社シー・スペースを設立。</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="shrink-0 font-bold text-[var(--color-navy-light)] w-16">資格</span>
                                    <span>一級建築施工管理技士、二級建築士</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="shrink-0 font-bold text-[var(--color-navy-light)] w-16">趣味</span>
                                    <span>仕事・ゴルフ・釣り</span>
                                </li>
                            </ul>
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
