
import { Activity, BarChart, Cpu, Lightbulb, MessageCircle, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";
import { TextAnimate } from "@/components/ui/text-animate";




export default function Home() {
  return (
    <section className="mt-14">
      <div className="flex items-center justify-center w-full p-4">
        <h2 className="text-4xl flex items-center font-semibold">
          <Activity className="w-8 h-8 mr-2 animate-bounce" />
          Comments<span className="text-primary">Analysis</span>
        </h2>
      </div>

      <div className="my-4 text-lg text-center">
        <TextAnimate animation="slideLeft" by="character" className="text-xl mt-8 text-center">
          Analysez les avis clients avec précision et découvrez des insights clés pour améliorer vos produits et optimiser l&apos;expérience d&apos;achat.
        </TextAnimate>
      </div>

      <div className="p-4 grid grid-cols-1 gap-4 mt-8 md:grid-cols-3 items-center">
        <Card className="p-4 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out md:h-96">
          <CardContent>
            <div className="flex items-center flex-col gap-4">
              <MessageCircle className="h-8 w-8 text-primary inline-block" />
              <div className="p-4">
                <p className="text-xl">
                  <span className="text-primary">CommentsAnalysis</span> vous permet de recueillir les avis de vos clients directement depuis votre page de vente
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span>Optimisez l&apos;expérience client</span>
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="p-4 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out md:h-96">
          <CardContent>
            <div className="flex items-center flex-col gap-4">
              <BarChart className="h-8 w-8 text-blue-500 inline-block" />
              <div className="p-4">
                <p className="text-xl">
                  <span className="text-primary">CommentsAnalysis</span> exploite les retours clients pour extraire des insights clés, permettant ainsi une amélioration continue de l&apos;expérience utilisateur.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span>Améliorez l&apos;expérience client</span>
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>


        <Card className="p-4 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out h-96">
          <CardContent>
            <div className="flex items-center flex-col gap-4">
              <Cpu className="h-8 w-8 text-orange-500 inline-block" />
              <div className="p-4">
                <p className="text-xl">
                  <span className="text-primary">CommentsAnalysis</span> vous fournit des recommandations pertinentes, générées par une analyse avancée assistée par IA, pour optimiser vos produits et services.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  <span className="flex items-center space-x-1">
                    <Lightbulb className="h-4 w-4 text-yellow-500" />
                    <span>Optimisez vos services avec l&apos;IA</span>
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-center mt-8">
        <Link href="/analyse">
          <RainbowButton>Commencer</RainbowButton>
        </Link>
      </div>
    </section>
  );
}
