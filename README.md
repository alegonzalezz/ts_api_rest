# ts_api_rest

## Scripts disponibles

### `npm run dev`

Este comando inicia el servidor en modo de desarrollo. Utiliza `ts-node` para ejecutar directamente los archivos TypeScript sin necesidad de compilar previamente. Esto es ideal para:

- Desarrollar y probar cambios rápidamente.
- Observar actualizaciones en tiempo real cuando se realizan cambios en el código fuente (si se usa una herramienta como Nodemon).

### `npm run build`

Este comando compila todo el proyecto TypeScript a JavaScript utilizando el compilador de TypeScript (`tsc`). El código compilado se genera en la carpeta definida en el archivo `tsconfig.json` (por defecto, `dist/`). Esto es útil para:

- Preparar el proyecto para un entorno de producción.
- Asegurarse de que todo el código TypeScript esté libre de errores de compilación.

### `npm start`

Este comando ejecuta el servidor utilizando el código JavaScript compilado que se encuentra en la carpeta `dist/`. Es el comando que deberías usar en producción para:

- Ejecutar la aplicación en un entorno estable.
- Asegurar el máximo rendimiento sin depender de herramientas de desarrollo.

## Uso del Repository

El sistema de `repository` organiza las operaciones de base de datos y facilita la reutilización de consultas SQL mediante una clase centralizada. 

### Estructura
1. **Consultas SQL**: Definidas en `src/constants/queries.ts` para centralizar y reutilizar las queries.
2. **Ejecución de Queries**: Gestionada por la clase `QueryExecutor` en `src/repository/queryExecutor.ts`. Esta clase busca la consulta en `QUERIES` y ejecuta con los parámetros proporcionados.
3. **Repositorios Específicos**: Métodos específicos definidos en archivos como `src/repository/userRepository.ts` para operaciones concretas (por ejemplo, `getUserById`).

### Ejemplo de Uso
- **Definir una consulta**:
  ```typescript
  export const QUERIES = {
      GET_USER_BY_ID: 'SELECT * FROM users WHERE id = $1',
  };
  ```

- **Ejecución con parámetros**:
  ```typescript
  const user = await QueryExecutor.execute('GET_USER_BY_ID', [1]);
  ```

- **En un repositorio específico**:
  ```typescript
  export class UserRepository {
      static async getUserById(userId: number): Promise<any> {
          return QueryExecutor.execute('GET_USER_BY_ID', [userId]);
      }
  }
  ```

Este diseño separa la lógica de consultas y facilita el mantenimiento del proyecto.

