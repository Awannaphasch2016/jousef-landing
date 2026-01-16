import { MapPin } from "lucide-react";

export const LocalTrust = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with location pin */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=500&fit=crop"
                alt="Professionelle Beratung"
                className="w-full h-auto object-cover"
              />
              {/* Location badge */}
              <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <MapPin className="w-4 h-4" />
              Persönliche Betreuung
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Dein Partner für{" "}
              <span className="text-primary">Prozessarchitektur</span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Seit über 5 Jahren unterstütze ich Unternehmen dabei, aus{" "}
                <strong className="text-foreground">
                  manuellen Prozessen echte Wachstumssysteme
                </strong>{" "}
                zu machen. Mit persönlicher Betreuung und bewährter Erfahrung.
              </p>
              <p>
                Ich kenne die{" "}
                <strong className="text-foreground">
                  Herausforderungen wachsender Unternehmen
                </strong>
                : steigende Komplexität, Engpässe im Team, und zu wenig Zeit für
                strategische Themen. Deshalb biete ich Lösungen, die{" "}
                <strong className="text-foreground">
                  einfach funktionieren
                </strong>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
