import { describe, it, expect, beforeAll } from "vitest";
import { execSync } from "node:child_process";

// npm pack respeita o campo `files` — e a unica forma honesta de verificar o
// que chega no consumidor sem publicar de verdade.
//
// execSync com string (nao execFileSync com array + shell:true) e proposital:
// desde o Node que corrigiu a CVE-2024-27980, invocar "npm.cmd" via
// execFileSync sem shell da EINVAL no Windows, e habilitar shell:true com
// array de args dispara o DEP0190 (aviso de deprecacao) a cada chamada,
// sujando a saida do teste. execSync com comando literal (sem input externo
// interpolado) roda pelo shell padrao em qualquer SO sem nenhum dos dois.
function arquivosDoPacote(): string[] {
  const saida = execSync("npm pack --dry-run --json", { encoding: "utf8" });
  const entradas: { path: string }[] = JSON.parse(saida)[0].files;
  return entradas.map((f) => f.path.replace(/\\/g, "/"));
}

describe("pacote publicado", () => {
  // npm pack varre e compacta o pacote inteiro — caro o suficiente para
  // estourar o testTimeout padrao (5s) quando a suite roda em paralelo com
  // os outros arquivos. Uma chamada so aqui, compartilhada pelos 4 testes,
  // em vez de uma por teste.
  let caminhos: string[];
  beforeAll(() => {
    caminhos = arquivosDoPacote();
  }, 30_000);

  it("inclui o src para o consumidor varrer com @source", () => {
    expect(caminhos).toContain("src/primitivos/Button.tsx");
    expect(caminhos).toContain("src/blocos/Hero.tsx");
    expect(caminhos).toContain("src/componentes/Reveal.tsx");
  });

  it("continua incluindo o dist, que e o que executa", () => {
    expect(caminhos).toContain("dist/index.mjs");
    expect(caminhos).toContain("dist/index.d.ts");
  });

  it("mantem os CSS de tokens acessiveis pelos subpath exports", () => {
    expect(caminhos).toContain("src/tokens/globals.css");
    expect(caminhos).toContain("src/tokens/utilitarios.css");
  });

  it("nao publica os testes para dentro do consumidor", () => {
    const testes = caminhos.filter(
      (c) => c.includes("/testes/") || c.includes("/__tests__/"),
    );

    expect(testes).toEqual([]);
  });
});
