import React, { useState, useEffect, useCallback, useRef } from "react";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Array<{ type: { name: string } }>;
  abilities: Array<{ ability: { name: string } }>;
}

const InfiniteScrollCustom: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  // 🔑 guard against multiple triggers
  const loadingStateRef = useRef(false);
  const fetchPokemons = useCallback(async () => {
    if (loadingStateRef.current || !hasMore) return;

    setLoading(true);
    loadingStateRef.current = true;
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${page * 20}&limit=20`
      );
      const responseData = await response.json();

      if (responseData.results && responseData.results.length > 0) {
        // Fetch details for each pokemon
        const pokemonDetails = await Promise.all(
          responseData.results.map(async (pokemon: Pokemon) => {
            const detailResponse = await fetch(pokemon.url);
            return detailResponse.json();
          })
        );

        setPokemons((prevPokemons) => [...prevPokemons, ...pokemonDetails]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching pokemons:", error);
      setHasMore(false);
    } finally {
      setLoading(false);
      loadingStateRef.current = false;
    }
  }, [page, hasMore]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    console.log({
      isIntersecting,
      hasMore,
      loadingStateRef: loadingStateRef.current,
    });
    if (isIntersecting && hasMore && !loadingStateRef.current) {
      console.log("Fetching more pokemon...");
      fetchPokemons();
    }
  }, [isIntersecting, hasMore]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div style={{ height: "100%", overflow: "auto" }}>
      <h3
        style={{
          textAlign: "center",
          marginBottom: "20px",
          position: "sticky",
          top: 0,
          backgroundColor: "white",
          padding: "10px",
          zIndex: 1,
        }}
      >
        Pokemon with Custom Intersection Observer
      </h3>

      <div>
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              margin: "8px 0",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h4 style={{ margin: "0 0 8px 0", color: "#333" }}>
              #{pokemon.id} -{" "}
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h4>
            <p style={{ margin: "0", color: "#666", lineHeight: "1.5" }}>
              Height: {pokemon.height / 10}m | Weight: {pokemon.weight / 10}kg
            </p>
            <p style={{ margin: "4px 0", color: "#666" }}>
              Types: {pokemon.types.map((t) => t.type.name).join(", ")}
            </p>
            <p style={{ margin: "4px 0", color: "#666" }}>
              Abilities:{" "}
              {pokemon.abilities.map((a) => a.ability.name).join(", ")}
            </p>
          </div>
        ))}

        <div
          ref={loadingRef}
          style={{
            textAlign: "center",
            padding: "20px",
            minHeight: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {loading && <div className='loader'>Loading more pokemon...</div>}
          {!hasMore && pokemons.length > 0 && (
            <div>
              <b>No more pokemon to load!</b>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollCustom;
