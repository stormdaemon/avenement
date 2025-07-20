# 🤖 PROTOCOLE OPÉRATIONNEL IA "WINDSURF" — REACT 19

**Version :** 3.1  
**Statut :** ACTIF  
**Scope :** Projets IA & Apps basées sur React 19

---

## PARTIE 1 : DIRECTIVES D'EXÉCUTION DU CODE

Section à suivre impérativement lors de toute production ou modification de code.

### 1.1. Philosophie & Architecture

- **Composants Fonctionnels Exclusifs** :  
  Tous les composants sont des fonctions JavaScript/TypeScript (`function X() {}` ou `const X = () => {}`). Les composants de classe sont strictement interdits.
  - [React: Function Components (docs GitHub)](https://github.com/reactjs/react.dev/blob/main/src/content/learn/your-first-component.md)

- **Immutabilité Stricte** :  
  Les states et props sont inaltérables de façon directe (`state.key = value` interdit). Toujours créer de nouveaux objets/arrays.
  - [Concept: Immutability (docs GitHub)](https://github.com/reactjs/react.dev/blob/main/src/content/learning/immutability.md)

- **Flux de Données Unidirectionnel** :  
  Données → descendant par les props ; évènements/action → remontent par callbacks.
  - [Data Flow (docs GitHub)](https://github.com/reactjs/react.dev/blob/main/src/content/learn/passing-props-to-a-component.md)

- **SoC (Separation of Concerns)**  
    - Logique métier ➔ Hooks custom (`use...`)
    - API ➔ `/src/services/`
    - Présentation ➔ Composants JSX purs
    - Styles ➔ CSS Modules ou CSS-in-JS. Les styles en ligne sont autorisés uniquement pour cas ultra-dynamiques
  - [Hooks Custom/Gestion logiques (docs GitHub)](https://github.com/reactjs/react.dev/blob/main/src/content/learn/reusing-logic-with-custom-hooks.md)

- **Distinction Client/Serveur (React 19)** :  
    - Composant = Server Component par défaut.
    - `"use client";` obligatoire en haut du fichier seulement si le composant utilise un Hook client ou une API navigateur.
  - [Server/Client Components (docs GitHub)](https://github.com/reactjs/rfcs/blob/main/text/0222-server-components.md)

### 1.2. Standards de Codage

- **TypeScript priorité** :  
  PropTypes acceptés uniquement si TS impossible. Tous les props, états, retours sont typés.
  - [TypeScript & React Best Practices (docs GitHub)](https://github.com/typescript-cheatsheets/react/blob/main/README.md)

- **ESLint & Prettier** :  
  Aucun code accepté sans passage 100% OK sur ces outils (selon `.eslintrc` et `.prettierrc` du dépôt).
  - [ESLint config (GitHub)](https://github.com/eslint/eslint)
  - [Prettier config (GitHub)](https://github.com/prettier/prettier)

- **Nommage Canonique** :
    - Composant : `PascalCase` (`<AiWidget />`)
    - Hook : `useCamelCase` (`useSpotWeather`)
    - Variable/fonction : `camelCase`
    - Constante : `UPPER_SNAKE_CASE`
  - [Named Export Patterns (docs GitHub)](https://github.com/reactjs/react.dev/blob/main/src/content/learn/exporting-components.md)

- **Structure par composant (recommandée)** :
    ```
    /src/components/ui/Button/
    ├─ Button.tsx         # JSX + logique
    ├─ Button.module.css  # style
    └─ index.ts           # export { Button }
    ```
  - [Atomic/Feature-Driven Structure (ex. GitHub)](https://github.com/alan2207/bulletproof-react)

### 1.3. Hiérarchie d'Utilisation des APIs React

- **1. Gestion d'État Local**
    - `useState` → états simples
        - [useState (github)](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useState.md)
    - `useReducer` → états complexes/multiactions
        - [useReducer (github)](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useReducer.md)

- **2. Actions & Formulaires**
    - `useActionState` (React 19)
        - [useActionState (github)](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useActionState.md)
    - `useOptimistic` : pour UIs optimistes
        - [useOptimistic (github)](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useOptimistic.md)

- **3. Partage de Données**
    - Prop `children` privilégié à `useContext`
    - `useContext` + `use()` (React 19) pour données globales stables
        - [useContext (github)](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useContext.md)
        - [use (github)](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/use.md)

- **4. Effets de Bord**
    - `useEffect` uniquement pour sync externe
        - [useEffect (github)](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useEffect.md)

- **5. Optimisation**
    - `React.memo`, `useCallback`, `useMemo`, `lazy`, `<Suspense>`
        - [memo (github)](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/memo.md)
        - [useCallback (github)](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useCallback.md)
        - [useMemo (github)](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useMemo.md)
        - [lazy (github)](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/lazy.md)
        - [Suspense (github)](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/Suspense.md)

---

## PARTIE 2 : PROTOCOLE D'ACCÈS À LA DOCUMENTATION

### 2.1. Accès aux fichiers GitHub (React Docs)

L'intégralité de la référence doit s'appuyer sur le **clone local du repo doc officiel**.  
Chemin recommandé pour chaque API React :

| API / Composant        | Fichier Documentation GitHub |
|------------------------|:----------------------------|
| `useState`             | [`useState.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useState.md) |
| `useEffect`            | [`useEffect.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useEffect.md) |
| `useContext`           | [`useContext.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useContext.md) |
| `useReducer`           | [`useReducer.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useReducer.md) |
| `useRef`               | [`useRef.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useRef.md) |
| `use`                  | [`use.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/use.md) |
| `useActionState`       | [`useActionState.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useActionState.md) |
| `useOptimistic`        | [`useOptimistic.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useOptimistic.md) |
| `useFormStatus`        | [`useFormStatus.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useFormStatus.md) |
| `useMemo`              | [`useMemo.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useMemo.md) |
| `useCallback`          | [`useCallback.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useCallback.md) |
| `useTransition`        | [`useTransition.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useTransition.md) |
| `useDeferredValue`     | [`useDeferredValue.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/useDeferredValue.md) |
| `<Fragment>`           | [`Fragment.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/Fragment.md) |
| `<Suspense>`           | [`Suspense.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/Suspense.md) |
| `<StrictMode>`         | [`StrictMode.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/StrictMode.md) |
| `memo`                 | [`memo.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/memo.md) |
| `lazy`                 | [`lazy.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/lazy.md) |
| `"use client"`         | [`use-client.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/use-client.md) |
| `"use server"`         | [`use-server.md`](https://github.com/reactjs/react.dev/blob/main/src/content/reference/react/use-server.md) |

### 2.2. Documentation spécifique projet

Tout élément non standard React doit être documenté dans `/project-doc` :
- **Composant** : `/project-doc/components/NomComposant.md`
- **Hook** : `/project-doc/hooks/nomHook.md`
- **Service** : `/project-doc/services/nomService.md`
- Si absent ou vide : signalement immédiat et arrêt de service.

### 2.3. Procédure d’Échec de Documentation

- **Condition** : Documentation API absente ou vide.
- **Action** :  
    1. Nom de l’API/fonction manquante  
    2. Chemin attendu  
    3. Déclaration officielle d’impossibilité de continuer (conformité / qualité non garantie).

---

**FIN DU PROTOCOLE**
