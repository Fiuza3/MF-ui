import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom", "framer-motion"],
    alias: {
      "framer-motion": path.resolve("./node_modules/framer-motion"),
      react: path.resolve("./node_modules/react"),
      "react-dom": path.resolve("./node_modules/react-dom"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/testes/setup.ts"],
    // `.claude/worktrees` guarda cópias de trabalho de agentes, cada uma com
    // o `src` inteiro. Sem excluir, o Vitest testa o pacote quatro vezes e
    // reporta falha de código que não é o do pacote: eram 222 testes
    // vermelhos vindos dali, e nenhum do `src` de verdade.
    exclude: ["**/node_modules/**", "**/dist/**", ".claude/**"],
    globals: true,
    typecheck: {
      tsconfig: "./tsconfig.test.json",
    },
  },
});
