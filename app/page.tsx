"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Download,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  Languages,
  ChevronDown,
} from "lucide-react"

export default function CVWebsite() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "formation", "experience", "projets", "competences", "certifications"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <motion.h1
              className="text-xl font-bold text-gray-800"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Mohamed MED LEMINE BEDINE
            </motion.h1>
            <div className="hidden md:flex space-x-6">
              {[
                { id: "hero", label: "Accueil" },
                { id: "formation", label: "Formation" },
                { id: "experience", label: "Expérience" },
                { id: "projets", label: "Projets" },
                { id: "competences", label: "Compétences" },
                { id: "certifications", label: "Certifications" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                    activeSection === item.id ? "text-emerald-600" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button variant="outline" size="sm" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              <Download className="w-4 h-4 mr-2" />
              CV PDF
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                Mohamed MED LEMINE
                <span className="block text-emerald-600">BEDINE</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">Élève Ingénieur en Statistique & Ingénierie de Données</p>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                Passionné par l'analyse de données, l'intelligence artificielle et le développement web. Actuellement
                étudiant à l'École Supérieure Polytechnique de Nouakchott.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <Mail className="w-5 h-5 mr-2 text-emerald-600" />
                  <span>R23086@esp.mr</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="w-5 h-5 mr-2 text-emerald-600" />
                  <span>+222 36871887</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2 text-emerald-600" />
                  <span>Ksar, Nouakchott</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Github className="w-5 h-5 mr-2 text-emerald-600" />
                  <span>Mohamed Medlemine BEDINE</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-600 hover:bg-emerald-700"
                  onClick={() => scrollToSection("experience")}
                >
                  Voir mon parcours
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection("projets")}>
                  Mes projets
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-3xl opacity-20"></div>
                <img
                  src="/placeholder.svg?height=320&width=320"
                  alt="Mohamed MED LEMINE BEDINE"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* Formation Section */}
      <section id="formation" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-12">
              <GraduationCap className="w-8 h-8 text-emerald-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Formation</h2>
            </div>

            <div className="space-y-8">
              <Card className="border-l-4 border-l-emerald-600 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-700">École Supérieure Polytechnique de Nouakchott (ESP)</CardTitle>
                  <CardDescription className="text-lg">
                    Élève ingénieur en Statistique ingénierie de donnée
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                    2023 - Présent
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-orange-700">
                    Institut Préparatoire aux Grandes Écoles d'Ingénieurs (IPGEI)
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Admis au Concours National des Ingénieurs de la Mauritanie
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    2020 - 2023
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-purple-700">Lycée de Nouadhibou 3</CardTitle>
                  <CardDescription className="text-lg">Baccalauréat en Sciences Mathématiques</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    2013 - 2020
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-12">
              <Briefcase className="w-8 h-8 text-emerald-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Expériences Professionnelles</h2>
            </div>

            <div className="space-y-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-emerald-700">Projet industriel entreprise (PIE)</CardTitle>
                      <CardDescription className="text-lg">Stage en Alternance</CardDescription>
                    </div>
                    <Badge className="bg-emerald-600">Octobre 2024 - Décembre 2024</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    <strong>
                      Projet Django - Plateforme de traitement de données géostatistiques – ESP, Nouakchott
                    </strong>
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Développement d'une plateforme Django pour l'analyse de données géologiques</li>
                    <li>• Permet l'importation, la gestion, l'analyse et la modélisation des données de forage</li>
                    <li>• Intégration de visualisations interactives (cartes, graphiques) pour l'exploration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-orange-700">
                        Société Nationale Industrielle et Minière (SNIM)
                      </CardTitle>
                      <CardDescription className="text-lg">Stage de découverte</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      Juillet 2024 - Octobre 2024
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Contribution dans les systèmes des achats dans le Département d'Achat de la SNIM</li>
                    <li>• Les diverses missions en gestion dans des approvisionnement Département d'Achat</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projets Section */}
      <section id="projets" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-12">
              <Code className="w-8 h-8 text-emerald-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Projets Académiques</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-emerald-600">
                <CardHeader>
                  <CardTitle className="text-emerald-700">Projet innovation entreprenant</CardTitle>
                  <CardDescription>Véhicule autonome agricole avec IA</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Développement d'un véhicule autonome capable de collecter des données agricoles à l'aide de
                    capteurs. Les données sont transmises à un site web et exploitées avec des modèles de deep learning.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Flutter</Badge>
                    <Badge variant="outline">Django</Badge>
                    <Badge variant="outline">Arduino</Badge>
                    <Badge variant="outline">Capteurs IoT</Badge>
                  </div>
                  <Badge className="bg-emerald-600">2023 - 2024</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-orange-500">
                <CardHeader>
                  <CardTitle className="text-orange-700">Site web calculer l'indice de prix INPC</CardTitle>
                  <CardDescription>Analyse statistique des prix</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Site permettant de calculer l'indice national des prix à la consommation (INPC) et de visualiser son
                    évolution. Focus sur l'analyse statistique.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Django</Badge>
                    <Badge variant="outline">Docker</Badge>
                  </div>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                    2025 - Présent
                  </Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-purple-500">
                <CardHeader>
                  <CardTitle className="text-purple-700">Détection automatique d'infractions routières</CardTitle>
                  <CardDescription>IA et vidéosurveillance</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Système de détection automatique des infractions routières via vidéosurveillance. Identification des
                    feux rouges et analyse du franchissement illégal.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">OpenCV</Badge>
                    <Badge variant="outline">PyTorch</Badge>
                    <Badge variant="outline">YOLOv5</Badge>
                    <Badge variant="outline">LSTM</Badge>
                  </div>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    2024 - 2025
                  </Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-t-4 border-t-teal-500">
                <CardHeader>
                  <CardTitle className="text-teal-700">Automatisation musique traditionnelle mauritanienne</CardTitle>
                  <CardDescription>IA et patrimoine culturel</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Utilisation de réseaux LSTM pour reconnaître les maqâms traditionnels mauritaniens. Préservation du
                    patrimoine musical via l'IA.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">NumPy</Badge>
                    <Badge variant="outline">LibROSA</Badge>
                    <Badge variant="outline">LSTM</Badge>
                  </div>
                  <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                    2024 - 2025
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compétences Section */}
      <section id="competences" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-12">
              <Code className="w-8 h-8 text-emerald-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Compétences</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-emerald-700">Programmation</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-emerald-600">Python</Badge>
                    <Badge className="bg-emerald-600">Scala</Badge>
                    <Badge className="bg-emerald-600">C/C++</Badge>
                    <Badge className="bg-emerald-600">HTML/CSS</Badge>
                    <Badge className="bg-emerald-600">R</Badge>
                    <Badge className="bg-emerald-600">SQL</Badge>
                    <Badge className="bg-emerald-600">VBA</Badge>
                    <Badge className="bg-emerald-600">LaTeX</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-orange-700">Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      MySQL
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      MongoDB
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      Docker
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      Django
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      Flask
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      Spark
                    </Badge>
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      Git
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-purple-700">Soft Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      Leadership
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      Gestion de projets
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      Travail d'équipe
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      Résolution de problèmes
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      Communication
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator className="my-12" />

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center">
                    <Languages className="w-6 h-6 text-emerald-600 mr-3" />
                    <CardTitle className="text-emerald-700">Langues</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Arabe</span>
                      <Badge className="bg-emerald-600">Langue maternelle</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Français</span>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                        Avancé
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Anglais</span>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        Courant
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center">
                    <Award className="w-6 h-6 text-emerald-600 mr-3" />
                    <CardTitle className="text-emerald-700">Certifications</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium">Git and GitHub</p>
                      <p className="text-sm text-gray-600">Data Science 360 - 2024</p>
                    </div>
                    <div>
                      <p className="font-medium">SQL</p>
                      <p className="text-sm text-gray-600">Data Science 360 - 2024</p>
                    </div>
                    <div>
                      <p className="font-medium">DELF B2</p>
                      <p className="text-sm text-gray-600">2024</p>
                    </div>
                    <div>
                      <p className="font-medium">Core English Language Test B1+</p>
                      <p className="text-sm text-gray-600">Tracktest CEFR - 2024</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Contactez-moi</h3>
          <p className="text-gray-400 mb-8">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <Button
              variant="outline"
              className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white"
            >
              <Mail className="w-4 h-4 mr-2" />
              R23086@esp.mr
            </Button>
            <Button
              variant="outline"
              className="border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white"
            >
              <Phone className="w-4 h-4 mr-2" />
              +222 36871887
            </Button>
          </div>
          <p className="text-gray-500">© 2025 Mohamed MED LEMINE BEDINE. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
