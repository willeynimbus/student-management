
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CourseType
 * 
 */
export type CourseType = $Result.DefaultSelection<Prisma.$CourseTypePayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model CourseOffering
 * 
 */
export type CourseOffering = $Result.DefaultSelection<Prisma.$CourseOfferingPayload>
/**
 * Model StudentRegisteration
 * 
 */
export type StudentRegisteration = $Result.DefaultSelection<Prisma.$StudentRegisterationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CourseTypes
 * const courseTypes = await prisma.courseType.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CourseTypes
   * const courseTypes = await prisma.courseType.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.courseType`: Exposes CRUD operations for the **CourseType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseTypes
    * const courseTypes = await prisma.courseType.findMany()
    * ```
    */
  get courseType(): Prisma.CourseTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.courseOffering`: Exposes CRUD operations for the **CourseOffering** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourseOfferings
    * const courseOfferings = await prisma.courseOffering.findMany()
    * ```
    */
  get courseOffering(): Prisma.CourseOfferingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentRegisteration`: Exposes CRUD operations for the **StudentRegisteration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentRegisterations
    * const studentRegisterations = await prisma.studentRegisteration.findMany()
    * ```
    */
  get studentRegisteration(): Prisma.StudentRegisterationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CourseType: 'CourseType',
    Course: 'Course',
    CourseOffering: 'CourseOffering',
    StudentRegisteration: 'StudentRegisteration'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "courseType" | "course" | "courseOffering" | "studentRegisteration"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CourseType: {
        payload: Prisma.$CourseTypePayload<ExtArgs>
        fields: Prisma.CourseTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTypePayload>
          }
          findFirst: {
            args: Prisma.CourseTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTypePayload>
          }
          findMany: {
            args: Prisma.CourseTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTypePayload>[]
          }
          create: {
            args: Prisma.CourseTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTypePayload>
          }
          createMany: {
            args: Prisma.CourseTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTypePayload>[]
          }
          delete: {
            args: Prisma.CourseTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTypePayload>
          }
          update: {
            args: Prisma.CourseTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTypePayload>
          }
          deleteMany: {
            args: Prisma.CourseTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTypePayload>[]
          }
          upsert: {
            args: Prisma.CourseTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseTypePayload>
          }
          aggregate: {
            args: Prisma.CourseTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseType>
          }
          groupBy: {
            args: Prisma.CourseTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseTypeCountArgs<ExtArgs>
            result: $Utils.Optional<CourseTypeCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      CourseOffering: {
        payload: Prisma.$CourseOfferingPayload<ExtArgs>
        fields: Prisma.CourseOfferingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseOfferingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseOfferingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          findFirst: {
            args: Prisma.CourseOfferingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseOfferingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          findMany: {
            args: Prisma.CourseOfferingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>[]
          }
          create: {
            args: Prisma.CourseOfferingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          createMany: {
            args: Prisma.CourseOfferingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseOfferingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>[]
          }
          delete: {
            args: Prisma.CourseOfferingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          update: {
            args: Prisma.CourseOfferingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          deleteMany: {
            args: Prisma.CourseOfferingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseOfferingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseOfferingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>[]
          }
          upsert: {
            args: Prisma.CourseOfferingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourseOfferingPayload>
          }
          aggregate: {
            args: Prisma.CourseOfferingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourseOffering>
          }
          groupBy: {
            args: Prisma.CourseOfferingGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseOfferingGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseOfferingCountArgs<ExtArgs>
            result: $Utils.Optional<CourseOfferingCountAggregateOutputType> | number
          }
        }
      }
      StudentRegisteration: {
        payload: Prisma.$StudentRegisterationPayload<ExtArgs>
        fields: Prisma.StudentRegisterationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentRegisterationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRegisterationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentRegisterationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRegisterationPayload>
          }
          findFirst: {
            args: Prisma.StudentRegisterationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRegisterationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentRegisterationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRegisterationPayload>
          }
          findMany: {
            args: Prisma.StudentRegisterationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRegisterationPayload>[]
          }
          create: {
            args: Prisma.StudentRegisterationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRegisterationPayload>
          }
          createMany: {
            args: Prisma.StudentRegisterationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentRegisterationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRegisterationPayload>[]
          }
          delete: {
            args: Prisma.StudentRegisterationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRegisterationPayload>
          }
          update: {
            args: Prisma.StudentRegisterationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRegisterationPayload>
          }
          deleteMany: {
            args: Prisma.StudentRegisterationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentRegisterationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentRegisterationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRegisterationPayload>[]
          }
          upsert: {
            args: Prisma.StudentRegisterationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentRegisterationPayload>
          }
          aggregate: {
            args: Prisma.StudentRegisterationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentRegisteration>
          }
          groupBy: {
            args: Prisma.StudentRegisterationGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentRegisterationGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentRegisterationCountArgs<ExtArgs>
            result: $Utils.Optional<StudentRegisterationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    courseType?: CourseTypeOmit
    course?: CourseOmit
    courseOffering?: CourseOfferingOmit
    studentRegisteration?: StudentRegisterationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CourseTypeCountOutputType
   */

  export type CourseTypeCountOutputType = {
    courseOffering: number
  }

  export type CourseTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOffering?: boolean | CourseTypeCountOutputTypeCountCourseOfferingArgs
  }

  // Custom InputTypes
  /**
   * CourseTypeCountOutputType without action
   */
  export type CourseTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseTypeCountOutputType
     */
    select?: CourseTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseTypeCountOutputType without action
   */
  export type CourseTypeCountOutputTypeCountCourseOfferingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseOfferingWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    courseOffering: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOffering?: boolean | CourseCountOutputTypeCountCourseOfferingArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCourseOfferingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseOfferingWhereInput
  }


  /**
   * Count Type CourseOfferingCountOutputType
   */

  export type CourseOfferingCountOutputType = {
    registerations: number
  }

  export type CourseOfferingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    registerations?: boolean | CourseOfferingCountOutputTypeCountRegisterationsArgs
  }

  // Custom InputTypes
  /**
   * CourseOfferingCountOutputType without action
   */
  export type CourseOfferingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOfferingCountOutputType
     */
    select?: CourseOfferingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseOfferingCountOutputType without action
   */
  export type CourseOfferingCountOutputTypeCountRegisterationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentRegisterationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CourseType
   */

  export type AggregateCourseType = {
    _count: CourseTypeCountAggregateOutputType | null
    _avg: CourseTypeAvgAggregateOutputType | null
    _sum: CourseTypeSumAggregateOutputType | null
    _min: CourseTypeMinAggregateOutputType | null
    _max: CourseTypeMaxAggregateOutputType | null
  }

  export type CourseTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type CourseTypeSumAggregateOutputType = {
    id: number | null
  }

  export type CourseTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CourseTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CourseTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CourseTypeAvgAggregateInputType = {
    id?: true
  }

  export type CourseTypeSumAggregateInputType = {
    id?: true
  }

  export type CourseTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CourseTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CourseTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CourseTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseType to aggregate.
     */
    where?: CourseTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTypes to fetch.
     */
    orderBy?: CourseTypeOrderByWithRelationInput | CourseTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseTypes
    **/
    _count?: true | CourseTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseTypeMaxAggregateInputType
  }

  export type GetCourseTypeAggregateType<T extends CourseTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseType[P]>
      : GetScalarType<T[P], AggregateCourseType[P]>
  }




  export type CourseTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseTypeWhereInput
    orderBy?: CourseTypeOrderByWithAggregationInput | CourseTypeOrderByWithAggregationInput[]
    by: CourseTypeScalarFieldEnum[] | CourseTypeScalarFieldEnum
    having?: CourseTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseTypeCountAggregateInputType | true
    _avg?: CourseTypeAvgAggregateInputType
    _sum?: CourseTypeSumAggregateInputType
    _min?: CourseTypeMinAggregateInputType
    _max?: CourseTypeMaxAggregateInputType
  }

  export type CourseTypeGroupByOutputType = {
    id: number
    name: string
    _count: CourseTypeCountAggregateOutputType | null
    _avg: CourseTypeAvgAggregateOutputType | null
    _sum: CourseTypeSumAggregateOutputType | null
    _min: CourseTypeMinAggregateOutputType | null
    _max: CourseTypeMaxAggregateOutputType | null
  }

  type GetCourseTypeGroupByPayload<T extends CourseTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseTypeGroupByOutputType[P]>
            : GetScalarType<T[P], CourseTypeGroupByOutputType[P]>
        }
      >
    >


  export type CourseTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    courseOffering?: boolean | CourseType$courseOfferingArgs<ExtArgs>
    _count?: boolean | CourseTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseType"]>

  export type CourseTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["courseType"]>

  export type CourseTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["courseType"]>

  export type CourseTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CourseTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["courseType"]>
  export type CourseTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOffering?: boolean | CourseType$courseOfferingArgs<ExtArgs>
    _count?: boolean | CourseTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CourseTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseType"
    objects: {
      courseOffering: Prisma.$CourseOfferingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["courseType"]>
    composites: {}
  }

  type CourseTypeGetPayload<S extends boolean | null | undefined | CourseTypeDefaultArgs> = $Result.GetResult<Prisma.$CourseTypePayload, S>

  type CourseTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseTypeCountAggregateInputType | true
    }

  export interface CourseTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseType'], meta: { name: 'CourseType' } }
    /**
     * Find zero or one CourseType that matches the filter.
     * @param {CourseTypeFindUniqueArgs} args - Arguments to find a CourseType
     * @example
     * // Get one CourseType
     * const courseType = await prisma.courseType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseTypeFindUniqueArgs>(args: SelectSubset<T, CourseTypeFindUniqueArgs<ExtArgs>>): Prisma__CourseTypeClient<$Result.GetResult<Prisma.$CourseTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseTypeFindUniqueOrThrowArgs} args - Arguments to find a CourseType
     * @example
     * // Get one CourseType
     * const courseType = await prisma.courseType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseTypeClient<$Result.GetResult<Prisma.$CourseTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTypeFindFirstArgs} args - Arguments to find a CourseType
     * @example
     * // Get one CourseType
     * const courseType = await prisma.courseType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseTypeFindFirstArgs>(args?: SelectSubset<T, CourseTypeFindFirstArgs<ExtArgs>>): Prisma__CourseTypeClient<$Result.GetResult<Prisma.$CourseTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTypeFindFirstOrThrowArgs} args - Arguments to find a CourseType
     * @example
     * // Get one CourseType
     * const courseType = await prisma.courseType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseTypeClient<$Result.GetResult<Prisma.$CourseTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseTypes
     * const courseTypes = await prisma.courseType.findMany()
     * 
     * // Get first 10 CourseTypes
     * const courseTypes = await prisma.courseType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseTypeWithIdOnly = await prisma.courseType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseTypeFindManyArgs>(args?: SelectSubset<T, CourseTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseType.
     * @param {CourseTypeCreateArgs} args - Arguments to create a CourseType.
     * @example
     * // Create one CourseType
     * const CourseType = await prisma.courseType.create({
     *   data: {
     *     // ... data to create a CourseType
     *   }
     * })
     * 
     */
    create<T extends CourseTypeCreateArgs>(args: SelectSubset<T, CourseTypeCreateArgs<ExtArgs>>): Prisma__CourseTypeClient<$Result.GetResult<Prisma.$CourseTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseTypes.
     * @param {CourseTypeCreateManyArgs} args - Arguments to create many CourseTypes.
     * @example
     * // Create many CourseTypes
     * const courseType = await prisma.courseType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseTypeCreateManyArgs>(args?: SelectSubset<T, CourseTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseTypes and returns the data saved in the database.
     * @param {CourseTypeCreateManyAndReturnArgs} args - Arguments to create many CourseTypes.
     * @example
     * // Create many CourseTypes
     * const courseType = await prisma.courseType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseTypes and only return the `id`
     * const courseTypeWithIdOnly = await prisma.courseType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseType.
     * @param {CourseTypeDeleteArgs} args - Arguments to delete one CourseType.
     * @example
     * // Delete one CourseType
     * const CourseType = await prisma.courseType.delete({
     *   where: {
     *     // ... filter to delete one CourseType
     *   }
     * })
     * 
     */
    delete<T extends CourseTypeDeleteArgs>(args: SelectSubset<T, CourseTypeDeleteArgs<ExtArgs>>): Prisma__CourseTypeClient<$Result.GetResult<Prisma.$CourseTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseType.
     * @param {CourseTypeUpdateArgs} args - Arguments to update one CourseType.
     * @example
     * // Update one CourseType
     * const courseType = await prisma.courseType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseTypeUpdateArgs>(args: SelectSubset<T, CourseTypeUpdateArgs<ExtArgs>>): Prisma__CourseTypeClient<$Result.GetResult<Prisma.$CourseTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseTypes.
     * @param {CourseTypeDeleteManyArgs} args - Arguments to filter CourseTypes to delete.
     * @example
     * // Delete a few CourseTypes
     * const { count } = await prisma.courseType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseTypeDeleteManyArgs>(args?: SelectSubset<T, CourseTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseTypes
     * const courseType = await prisma.courseType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseTypeUpdateManyArgs>(args: SelectSubset<T, CourseTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseTypes and returns the data updated in the database.
     * @param {CourseTypeUpdateManyAndReturnArgs} args - Arguments to update many CourseTypes.
     * @example
     * // Update many CourseTypes
     * const courseType = await prisma.courseType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseTypes and only return the `id`
     * const courseTypeWithIdOnly = await prisma.courseType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseType.
     * @param {CourseTypeUpsertArgs} args - Arguments to update or create a CourseType.
     * @example
     * // Update or create a CourseType
     * const courseType = await prisma.courseType.upsert({
     *   create: {
     *     // ... data to create a CourseType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseType we want to update
     *   }
     * })
     */
    upsert<T extends CourseTypeUpsertArgs>(args: SelectSubset<T, CourseTypeUpsertArgs<ExtArgs>>): Prisma__CourseTypeClient<$Result.GetResult<Prisma.$CourseTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTypeCountArgs} args - Arguments to filter CourseTypes to count.
     * @example
     * // Count the number of CourseTypes
     * const count = await prisma.courseType.count({
     *   where: {
     *     // ... the filter for the CourseTypes we want to count
     *   }
     * })
    **/
    count<T extends CourseTypeCountArgs>(
      args?: Subset<T, CourseTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseTypeAggregateArgs>(args: Subset<T, CourseTypeAggregateArgs>): Prisma.PrismaPromise<GetCourseTypeAggregateType<T>>

    /**
     * Group by CourseType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseTypeGroupByArgs['orderBy'] }
        : { orderBy?: CourseTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseType model
   */
  readonly fields: CourseTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courseOffering<T extends CourseType$courseOfferingArgs<ExtArgs> = {}>(args?: Subset<T, CourseType$courseOfferingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseType model
   */
  interface CourseTypeFieldRefs {
    readonly id: FieldRef<"CourseType", 'Int'>
    readonly name: FieldRef<"CourseType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CourseType findUnique
   */
  export type CourseTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseType
     */
    select?: CourseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseType
     */
    omit?: CourseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTypeInclude<ExtArgs> | null
    /**
     * Filter, which CourseType to fetch.
     */
    where: CourseTypeWhereUniqueInput
  }

  /**
   * CourseType findUniqueOrThrow
   */
  export type CourseTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseType
     */
    select?: CourseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseType
     */
    omit?: CourseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTypeInclude<ExtArgs> | null
    /**
     * Filter, which CourseType to fetch.
     */
    where: CourseTypeWhereUniqueInput
  }

  /**
   * CourseType findFirst
   */
  export type CourseTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseType
     */
    select?: CourseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseType
     */
    omit?: CourseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTypeInclude<ExtArgs> | null
    /**
     * Filter, which CourseType to fetch.
     */
    where?: CourseTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTypes to fetch.
     */
    orderBy?: CourseTypeOrderByWithRelationInput | CourseTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseTypes.
     */
    cursor?: CourseTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseTypes.
     */
    distinct?: CourseTypeScalarFieldEnum | CourseTypeScalarFieldEnum[]
  }

  /**
   * CourseType findFirstOrThrow
   */
  export type CourseTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseType
     */
    select?: CourseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseType
     */
    omit?: CourseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTypeInclude<ExtArgs> | null
    /**
     * Filter, which CourseType to fetch.
     */
    where?: CourseTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTypes to fetch.
     */
    orderBy?: CourseTypeOrderByWithRelationInput | CourseTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseTypes.
     */
    cursor?: CourseTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseTypes.
     */
    distinct?: CourseTypeScalarFieldEnum | CourseTypeScalarFieldEnum[]
  }

  /**
   * CourseType findMany
   */
  export type CourseTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseType
     */
    select?: CourseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseType
     */
    omit?: CourseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTypeInclude<ExtArgs> | null
    /**
     * Filter, which CourseTypes to fetch.
     */
    where?: CourseTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseTypes to fetch.
     */
    orderBy?: CourseTypeOrderByWithRelationInput | CourseTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseTypes.
     */
    cursor?: CourseTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseTypes.
     */
    skip?: number
    distinct?: CourseTypeScalarFieldEnum | CourseTypeScalarFieldEnum[]
  }

  /**
   * CourseType create
   */
  export type CourseTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseType
     */
    select?: CourseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseType
     */
    omit?: CourseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseType.
     */
    data: XOR<CourseTypeCreateInput, CourseTypeUncheckedCreateInput>
  }

  /**
   * CourseType createMany
   */
  export type CourseTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseTypes.
     */
    data: CourseTypeCreateManyInput | CourseTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseType createManyAndReturn
   */
  export type CourseTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseType
     */
    select?: CourseTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseType
     */
    omit?: CourseTypeOmit<ExtArgs> | null
    /**
     * The data used to create many CourseTypes.
     */
    data: CourseTypeCreateManyInput | CourseTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseType update
   */
  export type CourseTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseType
     */
    select?: CourseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseType
     */
    omit?: CourseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseType.
     */
    data: XOR<CourseTypeUpdateInput, CourseTypeUncheckedUpdateInput>
    /**
     * Choose, which CourseType to update.
     */
    where: CourseTypeWhereUniqueInput
  }

  /**
   * CourseType updateMany
   */
  export type CourseTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseTypes.
     */
    data: XOR<CourseTypeUpdateManyMutationInput, CourseTypeUncheckedUpdateManyInput>
    /**
     * Filter which CourseTypes to update
     */
    where?: CourseTypeWhereInput
    /**
     * Limit how many CourseTypes to update.
     */
    limit?: number
  }

  /**
   * CourseType updateManyAndReturn
   */
  export type CourseTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseType
     */
    select?: CourseTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseType
     */
    omit?: CourseTypeOmit<ExtArgs> | null
    /**
     * The data used to update CourseTypes.
     */
    data: XOR<CourseTypeUpdateManyMutationInput, CourseTypeUncheckedUpdateManyInput>
    /**
     * Filter which CourseTypes to update
     */
    where?: CourseTypeWhereInput
    /**
     * Limit how many CourseTypes to update.
     */
    limit?: number
  }

  /**
   * CourseType upsert
   */
  export type CourseTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseType
     */
    select?: CourseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseType
     */
    omit?: CourseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseType to update in case it exists.
     */
    where: CourseTypeWhereUniqueInput
    /**
     * In case the CourseType found by the `where` argument doesn't exist, create a new CourseType with this data.
     */
    create: XOR<CourseTypeCreateInput, CourseTypeUncheckedCreateInput>
    /**
     * In case the CourseType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseTypeUpdateInput, CourseTypeUncheckedUpdateInput>
  }

  /**
   * CourseType delete
   */
  export type CourseTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseType
     */
    select?: CourseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseType
     */
    omit?: CourseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTypeInclude<ExtArgs> | null
    /**
     * Filter which CourseType to delete.
     */
    where: CourseTypeWhereUniqueInput
  }

  /**
   * CourseType deleteMany
   */
  export type CourseTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseTypes to delete
     */
    where?: CourseTypeWhereInput
    /**
     * Limit how many CourseTypes to delete.
     */
    limit?: number
  }

  /**
   * CourseType.courseOffering
   */
  export type CourseType$courseOfferingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    where?: CourseOfferingWhereInput
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    cursor?: CourseOfferingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseOfferingScalarFieldEnum | CourseOfferingScalarFieldEnum[]
  }

  /**
   * CourseType without action
   */
  export type CourseTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseType
     */
    select?: CourseTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseType
     */
    omit?: CourseTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseTypeInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    name: string
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    courseOffering?: boolean | Course$courseOfferingArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOffering?: boolean | Course$courseOfferingArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      courseOffering: Prisma.$CourseOfferingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courseOffering<T extends Course$courseOfferingArgs<ExtArgs> = {}>(args?: Subset<T, Course$courseOfferingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'Int'>
    readonly name: FieldRef<"Course", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.courseOffering
   */
  export type Course$courseOfferingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    where?: CourseOfferingWhereInput
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    cursor?: CourseOfferingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseOfferingScalarFieldEnum | CourseOfferingScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model CourseOffering
   */

  export type AggregateCourseOffering = {
    _count: CourseOfferingCountAggregateOutputType | null
    _avg: CourseOfferingAvgAggregateOutputType | null
    _sum: CourseOfferingSumAggregateOutputType | null
    _min: CourseOfferingMinAggregateOutputType | null
    _max: CourseOfferingMaxAggregateOutputType | null
  }

  export type CourseOfferingAvgAggregateOutputType = {
    id: number | null
    courseId: number | null
    courseTypeId: number | null
  }

  export type CourseOfferingSumAggregateOutputType = {
    id: number | null
    courseId: number | null
    courseTypeId: number | null
  }

  export type CourseOfferingMinAggregateOutputType = {
    id: number | null
    courseId: number | null
    courseTypeId: number | null
  }

  export type CourseOfferingMaxAggregateOutputType = {
    id: number | null
    courseId: number | null
    courseTypeId: number | null
  }

  export type CourseOfferingCountAggregateOutputType = {
    id: number
    courseId: number
    courseTypeId: number
    _all: number
  }


  export type CourseOfferingAvgAggregateInputType = {
    id?: true
    courseId?: true
    courseTypeId?: true
  }

  export type CourseOfferingSumAggregateInputType = {
    id?: true
    courseId?: true
    courseTypeId?: true
  }

  export type CourseOfferingMinAggregateInputType = {
    id?: true
    courseId?: true
    courseTypeId?: true
  }

  export type CourseOfferingMaxAggregateInputType = {
    id?: true
    courseId?: true
    courseTypeId?: true
  }

  export type CourseOfferingCountAggregateInputType = {
    id?: true
    courseId?: true
    courseTypeId?: true
    _all?: true
  }

  export type CourseOfferingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseOffering to aggregate.
     */
    where?: CourseOfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseOfferings to fetch.
     */
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseOfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseOfferings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseOfferings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourseOfferings
    **/
    _count?: true | CourseOfferingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseOfferingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseOfferingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseOfferingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseOfferingMaxAggregateInputType
  }

  export type GetCourseOfferingAggregateType<T extends CourseOfferingAggregateArgs> = {
        [P in keyof T & keyof AggregateCourseOffering]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourseOffering[P]>
      : GetScalarType<T[P], AggregateCourseOffering[P]>
  }




  export type CourseOfferingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseOfferingWhereInput
    orderBy?: CourseOfferingOrderByWithAggregationInput | CourseOfferingOrderByWithAggregationInput[]
    by: CourseOfferingScalarFieldEnum[] | CourseOfferingScalarFieldEnum
    having?: CourseOfferingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseOfferingCountAggregateInputType | true
    _avg?: CourseOfferingAvgAggregateInputType
    _sum?: CourseOfferingSumAggregateInputType
    _min?: CourseOfferingMinAggregateInputType
    _max?: CourseOfferingMaxAggregateInputType
  }

  export type CourseOfferingGroupByOutputType = {
    id: number
    courseId: number
    courseTypeId: number
    _count: CourseOfferingCountAggregateOutputType | null
    _avg: CourseOfferingAvgAggregateOutputType | null
    _sum: CourseOfferingSumAggregateOutputType | null
    _min: CourseOfferingMinAggregateOutputType | null
    _max: CourseOfferingMaxAggregateOutputType | null
  }

  type GetCourseOfferingGroupByPayload<T extends CourseOfferingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseOfferingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseOfferingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseOfferingGroupByOutputType[P]>
            : GetScalarType<T[P], CourseOfferingGroupByOutputType[P]>
        }
      >
    >


  export type CourseOfferingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    courseTypeId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    courseType?: boolean | CourseTypeDefaultArgs<ExtArgs>
    registerations?: boolean | CourseOffering$registerationsArgs<ExtArgs>
    _count?: boolean | CourseOfferingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseOffering"]>

  export type CourseOfferingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    courseTypeId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    courseType?: boolean | CourseTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseOffering"]>

  export type CourseOfferingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseId?: boolean
    courseTypeId?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    courseType?: boolean | CourseTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courseOffering"]>

  export type CourseOfferingSelectScalar = {
    id?: boolean
    courseId?: boolean
    courseTypeId?: boolean
  }

  export type CourseOfferingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseId" | "courseTypeId", ExtArgs["result"]["courseOffering"]>
  export type CourseOfferingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    courseType?: boolean | CourseTypeDefaultArgs<ExtArgs>
    registerations?: boolean | CourseOffering$registerationsArgs<ExtArgs>
    _count?: boolean | CourseOfferingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseOfferingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    courseType?: boolean | CourseTypeDefaultArgs<ExtArgs>
  }
  export type CourseOfferingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    courseType?: boolean | CourseTypeDefaultArgs<ExtArgs>
  }

  export type $CourseOfferingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourseOffering"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      courseType: Prisma.$CourseTypePayload<ExtArgs>
      registerations: Prisma.$StudentRegisterationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      courseId: number
      courseTypeId: number
    }, ExtArgs["result"]["courseOffering"]>
    composites: {}
  }

  type CourseOfferingGetPayload<S extends boolean | null | undefined | CourseOfferingDefaultArgs> = $Result.GetResult<Prisma.$CourseOfferingPayload, S>

  type CourseOfferingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseOfferingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseOfferingCountAggregateInputType | true
    }

  export interface CourseOfferingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourseOffering'], meta: { name: 'CourseOffering' } }
    /**
     * Find zero or one CourseOffering that matches the filter.
     * @param {CourseOfferingFindUniqueArgs} args - Arguments to find a CourseOffering
     * @example
     * // Get one CourseOffering
     * const courseOffering = await prisma.courseOffering.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseOfferingFindUniqueArgs>(args: SelectSubset<T, CourseOfferingFindUniqueArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CourseOffering that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseOfferingFindUniqueOrThrowArgs} args - Arguments to find a CourseOffering
     * @example
     * // Get one CourseOffering
     * const courseOffering = await prisma.courseOffering.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseOfferingFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseOfferingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseOffering that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingFindFirstArgs} args - Arguments to find a CourseOffering
     * @example
     * // Get one CourseOffering
     * const courseOffering = await prisma.courseOffering.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseOfferingFindFirstArgs>(args?: SelectSubset<T, CourseOfferingFindFirstArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CourseOffering that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingFindFirstOrThrowArgs} args - Arguments to find a CourseOffering
     * @example
     * // Get one CourseOffering
     * const courseOffering = await prisma.courseOffering.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseOfferingFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseOfferingFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CourseOfferings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourseOfferings
     * const courseOfferings = await prisma.courseOffering.findMany()
     * 
     * // Get first 10 CourseOfferings
     * const courseOfferings = await prisma.courseOffering.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseOfferingWithIdOnly = await prisma.courseOffering.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseOfferingFindManyArgs>(args?: SelectSubset<T, CourseOfferingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CourseOffering.
     * @param {CourseOfferingCreateArgs} args - Arguments to create a CourseOffering.
     * @example
     * // Create one CourseOffering
     * const CourseOffering = await prisma.courseOffering.create({
     *   data: {
     *     // ... data to create a CourseOffering
     *   }
     * })
     * 
     */
    create<T extends CourseOfferingCreateArgs>(args: SelectSubset<T, CourseOfferingCreateArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CourseOfferings.
     * @param {CourseOfferingCreateManyArgs} args - Arguments to create many CourseOfferings.
     * @example
     * // Create many CourseOfferings
     * const courseOffering = await prisma.courseOffering.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseOfferingCreateManyArgs>(args?: SelectSubset<T, CourseOfferingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourseOfferings and returns the data saved in the database.
     * @param {CourseOfferingCreateManyAndReturnArgs} args - Arguments to create many CourseOfferings.
     * @example
     * // Create many CourseOfferings
     * const courseOffering = await prisma.courseOffering.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourseOfferings and only return the `id`
     * const courseOfferingWithIdOnly = await prisma.courseOffering.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseOfferingCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseOfferingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CourseOffering.
     * @param {CourseOfferingDeleteArgs} args - Arguments to delete one CourseOffering.
     * @example
     * // Delete one CourseOffering
     * const CourseOffering = await prisma.courseOffering.delete({
     *   where: {
     *     // ... filter to delete one CourseOffering
     *   }
     * })
     * 
     */
    delete<T extends CourseOfferingDeleteArgs>(args: SelectSubset<T, CourseOfferingDeleteArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CourseOffering.
     * @param {CourseOfferingUpdateArgs} args - Arguments to update one CourseOffering.
     * @example
     * // Update one CourseOffering
     * const courseOffering = await prisma.courseOffering.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseOfferingUpdateArgs>(args: SelectSubset<T, CourseOfferingUpdateArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CourseOfferings.
     * @param {CourseOfferingDeleteManyArgs} args - Arguments to filter CourseOfferings to delete.
     * @example
     * // Delete a few CourseOfferings
     * const { count } = await prisma.courseOffering.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseOfferingDeleteManyArgs>(args?: SelectSubset<T, CourseOfferingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseOfferings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourseOfferings
     * const courseOffering = await prisma.courseOffering.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseOfferingUpdateManyArgs>(args: SelectSubset<T, CourseOfferingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourseOfferings and returns the data updated in the database.
     * @param {CourseOfferingUpdateManyAndReturnArgs} args - Arguments to update many CourseOfferings.
     * @example
     * // Update many CourseOfferings
     * const courseOffering = await prisma.courseOffering.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CourseOfferings and only return the `id`
     * const courseOfferingWithIdOnly = await prisma.courseOffering.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseOfferingUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseOfferingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CourseOffering.
     * @param {CourseOfferingUpsertArgs} args - Arguments to update or create a CourseOffering.
     * @example
     * // Update or create a CourseOffering
     * const courseOffering = await prisma.courseOffering.upsert({
     *   create: {
     *     // ... data to create a CourseOffering
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourseOffering we want to update
     *   }
     * })
     */
    upsert<T extends CourseOfferingUpsertArgs>(args: SelectSubset<T, CourseOfferingUpsertArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CourseOfferings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingCountArgs} args - Arguments to filter CourseOfferings to count.
     * @example
     * // Count the number of CourseOfferings
     * const count = await prisma.courseOffering.count({
     *   where: {
     *     // ... the filter for the CourseOfferings we want to count
     *   }
     * })
    **/
    count<T extends CourseOfferingCountArgs>(
      args?: Subset<T, CourseOfferingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseOfferingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourseOffering.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseOfferingAggregateArgs>(args: Subset<T, CourseOfferingAggregateArgs>): Prisma.PrismaPromise<GetCourseOfferingAggregateType<T>>

    /**
     * Group by CourseOffering.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseOfferingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseOfferingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseOfferingGroupByArgs['orderBy'] }
        : { orderBy?: CourseOfferingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseOfferingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseOfferingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourseOffering model
   */
  readonly fields: CourseOfferingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourseOffering.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseOfferingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courseType<T extends CourseTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseTypeDefaultArgs<ExtArgs>>): Prisma__CourseTypeClient<$Result.GetResult<Prisma.$CourseTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    registerations<T extends CourseOffering$registerationsArgs<ExtArgs> = {}>(args?: Subset<T, CourseOffering$registerationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentRegisterationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CourseOffering model
   */
  interface CourseOfferingFieldRefs {
    readonly id: FieldRef<"CourseOffering", 'Int'>
    readonly courseId: FieldRef<"CourseOffering", 'Int'>
    readonly courseTypeId: FieldRef<"CourseOffering", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CourseOffering findUnique
   */
  export type CourseOfferingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOffering to fetch.
     */
    where: CourseOfferingWhereUniqueInput
  }

  /**
   * CourseOffering findUniqueOrThrow
   */
  export type CourseOfferingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOffering to fetch.
     */
    where: CourseOfferingWhereUniqueInput
  }

  /**
   * CourseOffering findFirst
   */
  export type CourseOfferingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOffering to fetch.
     */
    where?: CourseOfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseOfferings to fetch.
     */
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseOfferings.
     */
    cursor?: CourseOfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseOfferings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseOfferings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseOfferings.
     */
    distinct?: CourseOfferingScalarFieldEnum | CourseOfferingScalarFieldEnum[]
  }

  /**
   * CourseOffering findFirstOrThrow
   */
  export type CourseOfferingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOffering to fetch.
     */
    where?: CourseOfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseOfferings to fetch.
     */
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourseOfferings.
     */
    cursor?: CourseOfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseOfferings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseOfferings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourseOfferings.
     */
    distinct?: CourseOfferingScalarFieldEnum | CourseOfferingScalarFieldEnum[]
  }

  /**
   * CourseOffering findMany
   */
  export type CourseOfferingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter, which CourseOfferings to fetch.
     */
    where?: CourseOfferingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourseOfferings to fetch.
     */
    orderBy?: CourseOfferingOrderByWithRelationInput | CourseOfferingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourseOfferings.
     */
    cursor?: CourseOfferingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourseOfferings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourseOfferings.
     */
    skip?: number
    distinct?: CourseOfferingScalarFieldEnum | CourseOfferingScalarFieldEnum[]
  }

  /**
   * CourseOffering create
   */
  export type CourseOfferingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * The data needed to create a CourseOffering.
     */
    data: XOR<CourseOfferingCreateInput, CourseOfferingUncheckedCreateInput>
  }

  /**
   * CourseOffering createMany
   */
  export type CourseOfferingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourseOfferings.
     */
    data: CourseOfferingCreateManyInput | CourseOfferingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CourseOffering createManyAndReturn
   */
  export type CourseOfferingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * The data used to create many CourseOfferings.
     */
    data: CourseOfferingCreateManyInput | CourseOfferingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseOffering update
   */
  export type CourseOfferingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * The data needed to update a CourseOffering.
     */
    data: XOR<CourseOfferingUpdateInput, CourseOfferingUncheckedUpdateInput>
    /**
     * Choose, which CourseOffering to update.
     */
    where: CourseOfferingWhereUniqueInput
  }

  /**
   * CourseOffering updateMany
   */
  export type CourseOfferingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourseOfferings.
     */
    data: XOR<CourseOfferingUpdateManyMutationInput, CourseOfferingUncheckedUpdateManyInput>
    /**
     * Filter which CourseOfferings to update
     */
    where?: CourseOfferingWhereInput
    /**
     * Limit how many CourseOfferings to update.
     */
    limit?: number
  }

  /**
   * CourseOffering updateManyAndReturn
   */
  export type CourseOfferingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * The data used to update CourseOfferings.
     */
    data: XOR<CourseOfferingUpdateManyMutationInput, CourseOfferingUncheckedUpdateManyInput>
    /**
     * Filter which CourseOfferings to update
     */
    where?: CourseOfferingWhereInput
    /**
     * Limit how many CourseOfferings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourseOffering upsert
   */
  export type CourseOfferingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * The filter to search for the CourseOffering to update in case it exists.
     */
    where: CourseOfferingWhereUniqueInput
    /**
     * In case the CourseOffering found by the `where` argument doesn't exist, create a new CourseOffering with this data.
     */
    create: XOR<CourseOfferingCreateInput, CourseOfferingUncheckedCreateInput>
    /**
     * In case the CourseOffering was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseOfferingUpdateInput, CourseOfferingUncheckedUpdateInput>
  }

  /**
   * CourseOffering delete
   */
  export type CourseOfferingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
    /**
     * Filter which CourseOffering to delete.
     */
    where: CourseOfferingWhereUniqueInput
  }

  /**
   * CourseOffering deleteMany
   */
  export type CourseOfferingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourseOfferings to delete
     */
    where?: CourseOfferingWhereInput
    /**
     * Limit how many CourseOfferings to delete.
     */
    limit?: number
  }

  /**
   * CourseOffering.registerations
   */
  export type CourseOffering$registerationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRegisteration
     */
    select?: StudentRegisterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRegisteration
     */
    omit?: StudentRegisterationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRegisterationInclude<ExtArgs> | null
    where?: StudentRegisterationWhereInput
    orderBy?: StudentRegisterationOrderByWithRelationInput | StudentRegisterationOrderByWithRelationInput[]
    cursor?: StudentRegisterationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentRegisterationScalarFieldEnum | StudentRegisterationScalarFieldEnum[]
  }

  /**
   * CourseOffering without action
   */
  export type CourseOfferingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseOffering
     */
    select?: CourseOfferingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CourseOffering
     */
    omit?: CourseOfferingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseOfferingInclude<ExtArgs> | null
  }


  /**
   * Model StudentRegisteration
   */

  export type AggregateStudentRegisteration = {
    _count: StudentRegisterationCountAggregateOutputType | null
    _avg: StudentRegisterationAvgAggregateOutputType | null
    _sum: StudentRegisterationSumAggregateOutputType | null
    _min: StudentRegisterationMinAggregateOutputType | null
    _max: StudentRegisterationMaxAggregateOutputType | null
  }

  export type StudentRegisterationAvgAggregateOutputType = {
    id: number | null
    courseOfferingId: number | null
  }

  export type StudentRegisterationSumAggregateOutputType = {
    id: number | null
    courseOfferingId: number | null
  }

  export type StudentRegisterationMinAggregateOutputType = {
    id: number | null
    studentName: string | null
    email: string | null
    phoneNumber: string | null
    courseOfferingId: number | null
  }

  export type StudentRegisterationMaxAggregateOutputType = {
    id: number | null
    studentName: string | null
    email: string | null
    phoneNumber: string | null
    courseOfferingId: number | null
  }

  export type StudentRegisterationCountAggregateOutputType = {
    id: number
    studentName: number
    email: number
    phoneNumber: number
    courseOfferingId: number
    _all: number
  }


  export type StudentRegisterationAvgAggregateInputType = {
    id?: true
    courseOfferingId?: true
  }

  export type StudentRegisterationSumAggregateInputType = {
    id?: true
    courseOfferingId?: true
  }

  export type StudentRegisterationMinAggregateInputType = {
    id?: true
    studentName?: true
    email?: true
    phoneNumber?: true
    courseOfferingId?: true
  }

  export type StudentRegisterationMaxAggregateInputType = {
    id?: true
    studentName?: true
    email?: true
    phoneNumber?: true
    courseOfferingId?: true
  }

  export type StudentRegisterationCountAggregateInputType = {
    id?: true
    studentName?: true
    email?: true
    phoneNumber?: true
    courseOfferingId?: true
    _all?: true
  }

  export type StudentRegisterationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentRegisteration to aggregate.
     */
    where?: StudentRegisterationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentRegisterations to fetch.
     */
    orderBy?: StudentRegisterationOrderByWithRelationInput | StudentRegisterationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentRegisterationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentRegisterations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentRegisterations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentRegisterations
    **/
    _count?: true | StudentRegisterationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentRegisterationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentRegisterationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentRegisterationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentRegisterationMaxAggregateInputType
  }

  export type GetStudentRegisterationAggregateType<T extends StudentRegisterationAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentRegisteration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentRegisteration[P]>
      : GetScalarType<T[P], AggregateStudentRegisteration[P]>
  }




  export type StudentRegisterationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentRegisterationWhereInput
    orderBy?: StudentRegisterationOrderByWithAggregationInput | StudentRegisterationOrderByWithAggregationInput[]
    by: StudentRegisterationScalarFieldEnum[] | StudentRegisterationScalarFieldEnum
    having?: StudentRegisterationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentRegisterationCountAggregateInputType | true
    _avg?: StudentRegisterationAvgAggregateInputType
    _sum?: StudentRegisterationSumAggregateInputType
    _min?: StudentRegisterationMinAggregateInputType
    _max?: StudentRegisterationMaxAggregateInputType
  }

  export type StudentRegisterationGroupByOutputType = {
    id: number
    studentName: string
    email: string
    phoneNumber: string
    courseOfferingId: number
    _count: StudentRegisterationCountAggregateOutputType | null
    _avg: StudentRegisterationAvgAggregateOutputType | null
    _sum: StudentRegisterationSumAggregateOutputType | null
    _min: StudentRegisterationMinAggregateOutputType | null
    _max: StudentRegisterationMaxAggregateOutputType | null
  }

  type GetStudentRegisterationGroupByPayload<T extends StudentRegisterationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentRegisterationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentRegisterationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentRegisterationGroupByOutputType[P]>
            : GetScalarType<T[P], StudentRegisterationGroupByOutputType[P]>
        }
      >
    >


  export type StudentRegisterationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentName?: boolean
    email?: boolean
    phoneNumber?: boolean
    courseOfferingId?: boolean
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentRegisteration"]>

  export type StudentRegisterationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentName?: boolean
    email?: boolean
    phoneNumber?: boolean
    courseOfferingId?: boolean
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentRegisteration"]>

  export type StudentRegisterationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentName?: boolean
    email?: boolean
    phoneNumber?: boolean
    courseOfferingId?: boolean
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentRegisteration"]>

  export type StudentRegisterationSelectScalar = {
    id?: boolean
    studentName?: boolean
    email?: boolean
    phoneNumber?: boolean
    courseOfferingId?: boolean
  }

  export type StudentRegisterationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentName" | "email" | "phoneNumber" | "courseOfferingId", ExtArgs["result"]["studentRegisteration"]>
  export type StudentRegisterationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
  }
  export type StudentRegisterationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
  }
  export type StudentRegisterationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courseOffering?: boolean | CourseOfferingDefaultArgs<ExtArgs>
  }

  export type $StudentRegisterationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentRegisteration"
    objects: {
      courseOffering: Prisma.$CourseOfferingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentName: string
      email: string
      phoneNumber: string
      courseOfferingId: number
    }, ExtArgs["result"]["studentRegisteration"]>
    composites: {}
  }

  type StudentRegisterationGetPayload<S extends boolean | null | undefined | StudentRegisterationDefaultArgs> = $Result.GetResult<Prisma.$StudentRegisterationPayload, S>

  type StudentRegisterationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentRegisterationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentRegisterationCountAggregateInputType | true
    }

  export interface StudentRegisterationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentRegisteration'], meta: { name: 'StudentRegisteration' } }
    /**
     * Find zero or one StudentRegisteration that matches the filter.
     * @param {StudentRegisterationFindUniqueArgs} args - Arguments to find a StudentRegisteration
     * @example
     * // Get one StudentRegisteration
     * const studentRegisteration = await prisma.studentRegisteration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentRegisterationFindUniqueArgs>(args: SelectSubset<T, StudentRegisterationFindUniqueArgs<ExtArgs>>): Prisma__StudentRegisterationClient<$Result.GetResult<Prisma.$StudentRegisterationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentRegisteration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentRegisterationFindUniqueOrThrowArgs} args - Arguments to find a StudentRegisteration
     * @example
     * // Get one StudentRegisteration
     * const studentRegisteration = await prisma.studentRegisteration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentRegisterationFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentRegisterationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentRegisterationClient<$Result.GetResult<Prisma.$StudentRegisterationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentRegisteration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRegisterationFindFirstArgs} args - Arguments to find a StudentRegisteration
     * @example
     * // Get one StudentRegisteration
     * const studentRegisteration = await prisma.studentRegisteration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentRegisterationFindFirstArgs>(args?: SelectSubset<T, StudentRegisterationFindFirstArgs<ExtArgs>>): Prisma__StudentRegisterationClient<$Result.GetResult<Prisma.$StudentRegisterationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentRegisteration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRegisterationFindFirstOrThrowArgs} args - Arguments to find a StudentRegisteration
     * @example
     * // Get one StudentRegisteration
     * const studentRegisteration = await prisma.studentRegisteration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentRegisterationFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentRegisterationFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentRegisterationClient<$Result.GetResult<Prisma.$StudentRegisterationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentRegisterations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRegisterationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentRegisterations
     * const studentRegisterations = await prisma.studentRegisteration.findMany()
     * 
     * // Get first 10 StudentRegisterations
     * const studentRegisterations = await prisma.studentRegisteration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentRegisterationWithIdOnly = await prisma.studentRegisteration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentRegisterationFindManyArgs>(args?: SelectSubset<T, StudentRegisterationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentRegisterationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentRegisteration.
     * @param {StudentRegisterationCreateArgs} args - Arguments to create a StudentRegisteration.
     * @example
     * // Create one StudentRegisteration
     * const StudentRegisteration = await prisma.studentRegisteration.create({
     *   data: {
     *     // ... data to create a StudentRegisteration
     *   }
     * })
     * 
     */
    create<T extends StudentRegisterationCreateArgs>(args: SelectSubset<T, StudentRegisterationCreateArgs<ExtArgs>>): Prisma__StudentRegisterationClient<$Result.GetResult<Prisma.$StudentRegisterationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentRegisterations.
     * @param {StudentRegisterationCreateManyArgs} args - Arguments to create many StudentRegisterations.
     * @example
     * // Create many StudentRegisterations
     * const studentRegisteration = await prisma.studentRegisteration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentRegisterationCreateManyArgs>(args?: SelectSubset<T, StudentRegisterationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentRegisterations and returns the data saved in the database.
     * @param {StudentRegisterationCreateManyAndReturnArgs} args - Arguments to create many StudentRegisterations.
     * @example
     * // Create many StudentRegisterations
     * const studentRegisteration = await prisma.studentRegisteration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentRegisterations and only return the `id`
     * const studentRegisterationWithIdOnly = await prisma.studentRegisteration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentRegisterationCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentRegisterationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentRegisterationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentRegisteration.
     * @param {StudentRegisterationDeleteArgs} args - Arguments to delete one StudentRegisteration.
     * @example
     * // Delete one StudentRegisteration
     * const StudentRegisteration = await prisma.studentRegisteration.delete({
     *   where: {
     *     // ... filter to delete one StudentRegisteration
     *   }
     * })
     * 
     */
    delete<T extends StudentRegisterationDeleteArgs>(args: SelectSubset<T, StudentRegisterationDeleteArgs<ExtArgs>>): Prisma__StudentRegisterationClient<$Result.GetResult<Prisma.$StudentRegisterationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentRegisteration.
     * @param {StudentRegisterationUpdateArgs} args - Arguments to update one StudentRegisteration.
     * @example
     * // Update one StudentRegisteration
     * const studentRegisteration = await prisma.studentRegisteration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentRegisterationUpdateArgs>(args: SelectSubset<T, StudentRegisterationUpdateArgs<ExtArgs>>): Prisma__StudentRegisterationClient<$Result.GetResult<Prisma.$StudentRegisterationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentRegisterations.
     * @param {StudentRegisterationDeleteManyArgs} args - Arguments to filter StudentRegisterations to delete.
     * @example
     * // Delete a few StudentRegisterations
     * const { count } = await prisma.studentRegisteration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentRegisterationDeleteManyArgs>(args?: SelectSubset<T, StudentRegisterationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentRegisterations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRegisterationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentRegisterations
     * const studentRegisteration = await prisma.studentRegisteration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentRegisterationUpdateManyArgs>(args: SelectSubset<T, StudentRegisterationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentRegisterations and returns the data updated in the database.
     * @param {StudentRegisterationUpdateManyAndReturnArgs} args - Arguments to update many StudentRegisterations.
     * @example
     * // Update many StudentRegisterations
     * const studentRegisteration = await prisma.studentRegisteration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentRegisterations and only return the `id`
     * const studentRegisterationWithIdOnly = await prisma.studentRegisteration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentRegisterationUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentRegisterationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentRegisterationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentRegisteration.
     * @param {StudentRegisterationUpsertArgs} args - Arguments to update or create a StudentRegisteration.
     * @example
     * // Update or create a StudentRegisteration
     * const studentRegisteration = await prisma.studentRegisteration.upsert({
     *   create: {
     *     // ... data to create a StudentRegisteration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentRegisteration we want to update
     *   }
     * })
     */
    upsert<T extends StudentRegisterationUpsertArgs>(args: SelectSubset<T, StudentRegisterationUpsertArgs<ExtArgs>>): Prisma__StudentRegisterationClient<$Result.GetResult<Prisma.$StudentRegisterationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentRegisterations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRegisterationCountArgs} args - Arguments to filter StudentRegisterations to count.
     * @example
     * // Count the number of StudentRegisterations
     * const count = await prisma.studentRegisteration.count({
     *   where: {
     *     // ... the filter for the StudentRegisterations we want to count
     *   }
     * })
    **/
    count<T extends StudentRegisterationCountArgs>(
      args?: Subset<T, StudentRegisterationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentRegisterationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentRegisteration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRegisterationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentRegisterationAggregateArgs>(args: Subset<T, StudentRegisterationAggregateArgs>): Prisma.PrismaPromise<GetStudentRegisterationAggregateType<T>>

    /**
     * Group by StudentRegisteration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentRegisterationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentRegisterationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentRegisterationGroupByArgs['orderBy'] }
        : { orderBy?: StudentRegisterationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentRegisterationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentRegisterationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentRegisteration model
   */
  readonly fields: StudentRegisterationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentRegisteration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentRegisterationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courseOffering<T extends CourseOfferingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseOfferingDefaultArgs<ExtArgs>>): Prisma__CourseOfferingClient<$Result.GetResult<Prisma.$CourseOfferingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentRegisteration model
   */
  interface StudentRegisterationFieldRefs {
    readonly id: FieldRef<"StudentRegisteration", 'Int'>
    readonly studentName: FieldRef<"StudentRegisteration", 'String'>
    readonly email: FieldRef<"StudentRegisteration", 'String'>
    readonly phoneNumber: FieldRef<"StudentRegisteration", 'String'>
    readonly courseOfferingId: FieldRef<"StudentRegisteration", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StudentRegisteration findUnique
   */
  export type StudentRegisterationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRegisteration
     */
    select?: StudentRegisterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRegisteration
     */
    omit?: StudentRegisterationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRegisterationInclude<ExtArgs> | null
    /**
     * Filter, which StudentRegisteration to fetch.
     */
    where: StudentRegisterationWhereUniqueInput
  }

  /**
   * StudentRegisteration findUniqueOrThrow
   */
  export type StudentRegisterationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRegisteration
     */
    select?: StudentRegisterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRegisteration
     */
    omit?: StudentRegisterationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRegisterationInclude<ExtArgs> | null
    /**
     * Filter, which StudentRegisteration to fetch.
     */
    where: StudentRegisterationWhereUniqueInput
  }

  /**
   * StudentRegisteration findFirst
   */
  export type StudentRegisterationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRegisteration
     */
    select?: StudentRegisterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRegisteration
     */
    omit?: StudentRegisterationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRegisterationInclude<ExtArgs> | null
    /**
     * Filter, which StudentRegisteration to fetch.
     */
    where?: StudentRegisterationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentRegisterations to fetch.
     */
    orderBy?: StudentRegisterationOrderByWithRelationInput | StudentRegisterationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentRegisterations.
     */
    cursor?: StudentRegisterationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentRegisterations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentRegisterations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentRegisterations.
     */
    distinct?: StudentRegisterationScalarFieldEnum | StudentRegisterationScalarFieldEnum[]
  }

  /**
   * StudentRegisteration findFirstOrThrow
   */
  export type StudentRegisterationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRegisteration
     */
    select?: StudentRegisterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRegisteration
     */
    omit?: StudentRegisterationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRegisterationInclude<ExtArgs> | null
    /**
     * Filter, which StudentRegisteration to fetch.
     */
    where?: StudentRegisterationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentRegisterations to fetch.
     */
    orderBy?: StudentRegisterationOrderByWithRelationInput | StudentRegisterationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentRegisterations.
     */
    cursor?: StudentRegisterationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentRegisterations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentRegisterations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentRegisterations.
     */
    distinct?: StudentRegisterationScalarFieldEnum | StudentRegisterationScalarFieldEnum[]
  }

  /**
   * StudentRegisteration findMany
   */
  export type StudentRegisterationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRegisteration
     */
    select?: StudentRegisterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRegisteration
     */
    omit?: StudentRegisterationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRegisterationInclude<ExtArgs> | null
    /**
     * Filter, which StudentRegisterations to fetch.
     */
    where?: StudentRegisterationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentRegisterations to fetch.
     */
    orderBy?: StudentRegisterationOrderByWithRelationInput | StudentRegisterationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentRegisterations.
     */
    cursor?: StudentRegisterationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentRegisterations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentRegisterations.
     */
    skip?: number
    distinct?: StudentRegisterationScalarFieldEnum | StudentRegisterationScalarFieldEnum[]
  }

  /**
   * StudentRegisteration create
   */
  export type StudentRegisterationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRegisteration
     */
    select?: StudentRegisterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRegisteration
     */
    omit?: StudentRegisterationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRegisterationInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentRegisteration.
     */
    data: XOR<StudentRegisterationCreateInput, StudentRegisterationUncheckedCreateInput>
  }

  /**
   * StudentRegisteration createMany
   */
  export type StudentRegisterationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentRegisterations.
     */
    data: StudentRegisterationCreateManyInput | StudentRegisterationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentRegisteration createManyAndReturn
   */
  export type StudentRegisterationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRegisteration
     */
    select?: StudentRegisterationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRegisteration
     */
    omit?: StudentRegisterationOmit<ExtArgs> | null
    /**
     * The data used to create many StudentRegisterations.
     */
    data: StudentRegisterationCreateManyInput | StudentRegisterationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRegisterationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentRegisteration update
   */
  export type StudentRegisterationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRegisteration
     */
    select?: StudentRegisterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRegisteration
     */
    omit?: StudentRegisterationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRegisterationInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentRegisteration.
     */
    data: XOR<StudentRegisterationUpdateInput, StudentRegisterationUncheckedUpdateInput>
    /**
     * Choose, which StudentRegisteration to update.
     */
    where: StudentRegisterationWhereUniqueInput
  }

  /**
   * StudentRegisteration updateMany
   */
  export type StudentRegisterationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentRegisterations.
     */
    data: XOR<StudentRegisterationUpdateManyMutationInput, StudentRegisterationUncheckedUpdateManyInput>
    /**
     * Filter which StudentRegisterations to update
     */
    where?: StudentRegisterationWhereInput
    /**
     * Limit how many StudentRegisterations to update.
     */
    limit?: number
  }

  /**
   * StudentRegisteration updateManyAndReturn
   */
  export type StudentRegisterationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRegisteration
     */
    select?: StudentRegisterationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRegisteration
     */
    omit?: StudentRegisterationOmit<ExtArgs> | null
    /**
     * The data used to update StudentRegisterations.
     */
    data: XOR<StudentRegisterationUpdateManyMutationInput, StudentRegisterationUncheckedUpdateManyInput>
    /**
     * Filter which StudentRegisterations to update
     */
    where?: StudentRegisterationWhereInput
    /**
     * Limit how many StudentRegisterations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRegisterationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentRegisteration upsert
   */
  export type StudentRegisterationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRegisteration
     */
    select?: StudentRegisterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRegisteration
     */
    omit?: StudentRegisterationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRegisterationInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentRegisteration to update in case it exists.
     */
    where: StudentRegisterationWhereUniqueInput
    /**
     * In case the StudentRegisteration found by the `where` argument doesn't exist, create a new StudentRegisteration with this data.
     */
    create: XOR<StudentRegisterationCreateInput, StudentRegisterationUncheckedCreateInput>
    /**
     * In case the StudentRegisteration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentRegisterationUpdateInput, StudentRegisterationUncheckedUpdateInput>
  }

  /**
   * StudentRegisteration delete
   */
  export type StudentRegisterationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRegisteration
     */
    select?: StudentRegisterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRegisteration
     */
    omit?: StudentRegisterationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRegisterationInclude<ExtArgs> | null
    /**
     * Filter which StudentRegisteration to delete.
     */
    where: StudentRegisterationWhereUniqueInput
  }

  /**
   * StudentRegisteration deleteMany
   */
  export type StudentRegisterationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentRegisterations to delete
     */
    where?: StudentRegisterationWhereInput
    /**
     * Limit how many StudentRegisterations to delete.
     */
    limit?: number
  }

  /**
   * StudentRegisteration without action
   */
  export type StudentRegisterationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentRegisteration
     */
    select?: StudentRegisterationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentRegisteration
     */
    omit?: StudentRegisterationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentRegisterationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CourseTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CourseTypeScalarFieldEnum = (typeof CourseTypeScalarFieldEnum)[keyof typeof CourseTypeScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CourseOfferingScalarFieldEnum: {
    id: 'id',
    courseId: 'courseId',
    courseTypeId: 'courseTypeId'
  };

  export type CourseOfferingScalarFieldEnum = (typeof CourseOfferingScalarFieldEnum)[keyof typeof CourseOfferingScalarFieldEnum]


  export const StudentRegisterationScalarFieldEnum: {
    id: 'id',
    studentName: 'studentName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    courseOfferingId: 'courseOfferingId'
  };

  export type StudentRegisterationScalarFieldEnum = (typeof StudentRegisterationScalarFieldEnum)[keyof typeof StudentRegisterationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CourseTypeWhereInput = {
    AND?: CourseTypeWhereInput | CourseTypeWhereInput[]
    OR?: CourseTypeWhereInput[]
    NOT?: CourseTypeWhereInput | CourseTypeWhereInput[]
    id?: IntFilter<"CourseType"> | number
    name?: StringFilter<"CourseType"> | string
    courseOffering?: CourseOfferingListRelationFilter
  }

  export type CourseTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    courseOffering?: CourseOfferingOrderByRelationAggregateInput
  }

  export type CourseTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseTypeWhereInput | CourseTypeWhereInput[]
    OR?: CourseTypeWhereInput[]
    NOT?: CourseTypeWhereInput | CourseTypeWhereInput[]
    name?: StringFilter<"CourseType"> | string
    courseOffering?: CourseOfferingListRelationFilter
  }, "id">

  export type CourseTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CourseTypeCountOrderByAggregateInput
    _avg?: CourseTypeAvgOrderByAggregateInput
    _max?: CourseTypeMaxOrderByAggregateInput
    _min?: CourseTypeMinOrderByAggregateInput
    _sum?: CourseTypeSumOrderByAggregateInput
  }

  export type CourseTypeScalarWhereWithAggregatesInput = {
    AND?: CourseTypeScalarWhereWithAggregatesInput | CourseTypeScalarWhereWithAggregatesInput[]
    OR?: CourseTypeScalarWhereWithAggregatesInput[]
    NOT?: CourseTypeScalarWhereWithAggregatesInput | CourseTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CourseType"> | number
    name?: StringWithAggregatesFilter<"CourseType"> | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: IntFilter<"Course"> | number
    name?: StringFilter<"Course"> | string
    courseOffering?: CourseOfferingListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    courseOffering?: CourseOfferingOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    courseOffering?: CourseOfferingListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Course"> | number
    name?: StringWithAggregatesFilter<"Course"> | string
  }

  export type CourseOfferingWhereInput = {
    AND?: CourseOfferingWhereInput | CourseOfferingWhereInput[]
    OR?: CourseOfferingWhereInput[]
    NOT?: CourseOfferingWhereInput | CourseOfferingWhereInput[]
    id?: IntFilter<"CourseOffering"> | number
    courseId?: IntFilter<"CourseOffering"> | number
    courseTypeId?: IntFilter<"CourseOffering"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    courseType?: XOR<CourseTypeScalarRelationFilter, CourseTypeWhereInput>
    registerations?: StudentRegisterationListRelationFilter
  }

  export type CourseOfferingOrderByWithRelationInput = {
    id?: SortOrder
    courseId?: SortOrder
    courseTypeId?: SortOrder
    course?: CourseOrderByWithRelationInput
    courseType?: CourseTypeOrderByWithRelationInput
    registerations?: StudentRegisterationOrderByRelationAggregateInput
  }

  export type CourseOfferingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseOfferingWhereInput | CourseOfferingWhereInput[]
    OR?: CourseOfferingWhereInput[]
    NOT?: CourseOfferingWhereInput | CourseOfferingWhereInput[]
    courseId?: IntFilter<"CourseOffering"> | number
    courseTypeId?: IntFilter<"CourseOffering"> | number
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    courseType?: XOR<CourseTypeScalarRelationFilter, CourseTypeWhereInput>
    registerations?: StudentRegisterationListRelationFilter
  }, "id">

  export type CourseOfferingOrderByWithAggregationInput = {
    id?: SortOrder
    courseId?: SortOrder
    courseTypeId?: SortOrder
    _count?: CourseOfferingCountOrderByAggregateInput
    _avg?: CourseOfferingAvgOrderByAggregateInput
    _max?: CourseOfferingMaxOrderByAggregateInput
    _min?: CourseOfferingMinOrderByAggregateInput
    _sum?: CourseOfferingSumOrderByAggregateInput
  }

  export type CourseOfferingScalarWhereWithAggregatesInput = {
    AND?: CourseOfferingScalarWhereWithAggregatesInput | CourseOfferingScalarWhereWithAggregatesInput[]
    OR?: CourseOfferingScalarWhereWithAggregatesInput[]
    NOT?: CourseOfferingScalarWhereWithAggregatesInput | CourseOfferingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CourseOffering"> | number
    courseId?: IntWithAggregatesFilter<"CourseOffering"> | number
    courseTypeId?: IntWithAggregatesFilter<"CourseOffering"> | number
  }

  export type StudentRegisterationWhereInput = {
    AND?: StudentRegisterationWhereInput | StudentRegisterationWhereInput[]
    OR?: StudentRegisterationWhereInput[]
    NOT?: StudentRegisterationWhereInput | StudentRegisterationWhereInput[]
    id?: IntFilter<"StudentRegisteration"> | number
    studentName?: StringFilter<"StudentRegisteration"> | string
    email?: StringFilter<"StudentRegisteration"> | string
    phoneNumber?: StringFilter<"StudentRegisteration"> | string
    courseOfferingId?: IntFilter<"StudentRegisteration"> | number
    courseOffering?: XOR<CourseOfferingScalarRelationFilter, CourseOfferingWhereInput>
  }

  export type StudentRegisterationOrderByWithRelationInput = {
    id?: SortOrder
    studentName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    courseOfferingId?: SortOrder
    courseOffering?: CourseOfferingOrderByWithRelationInput
  }

  export type StudentRegisterationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phoneNumber?: string
    AND?: StudentRegisterationWhereInput | StudentRegisterationWhereInput[]
    OR?: StudentRegisterationWhereInput[]
    NOT?: StudentRegisterationWhereInput | StudentRegisterationWhereInput[]
    studentName?: StringFilter<"StudentRegisteration"> | string
    courseOfferingId?: IntFilter<"StudentRegisteration"> | number
    courseOffering?: XOR<CourseOfferingScalarRelationFilter, CourseOfferingWhereInput>
  }, "id" | "email" | "phoneNumber">

  export type StudentRegisterationOrderByWithAggregationInput = {
    id?: SortOrder
    studentName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    courseOfferingId?: SortOrder
    _count?: StudentRegisterationCountOrderByAggregateInput
    _avg?: StudentRegisterationAvgOrderByAggregateInput
    _max?: StudentRegisterationMaxOrderByAggregateInput
    _min?: StudentRegisterationMinOrderByAggregateInput
    _sum?: StudentRegisterationSumOrderByAggregateInput
  }

  export type StudentRegisterationScalarWhereWithAggregatesInput = {
    AND?: StudentRegisterationScalarWhereWithAggregatesInput | StudentRegisterationScalarWhereWithAggregatesInput[]
    OR?: StudentRegisterationScalarWhereWithAggregatesInput[]
    NOT?: StudentRegisterationScalarWhereWithAggregatesInput | StudentRegisterationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StudentRegisteration"> | number
    studentName?: StringWithAggregatesFilter<"StudentRegisteration"> | string
    email?: StringWithAggregatesFilter<"StudentRegisteration"> | string
    phoneNumber?: StringWithAggregatesFilter<"StudentRegisteration"> | string
    courseOfferingId?: IntWithAggregatesFilter<"StudentRegisteration"> | number
  }

  export type CourseTypeCreateInput = {
    name: string
    courseOffering?: CourseOfferingCreateNestedManyWithoutCourseTypeInput
  }

  export type CourseTypeUncheckedCreateInput = {
    id?: number
    name: string
    courseOffering?: CourseOfferingUncheckedCreateNestedManyWithoutCourseTypeInput
  }

  export type CourseTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    courseOffering?: CourseOfferingUpdateManyWithoutCourseTypeNestedInput
  }

  export type CourseTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    courseOffering?: CourseOfferingUncheckedUpdateManyWithoutCourseTypeNestedInput
  }

  export type CourseTypeCreateManyInput = {
    id?: number
    name: string
  }

  export type CourseTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourseTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateInput = {
    name: string
    courseOffering?: CourseOfferingCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    name: string
    courseOffering?: CourseOfferingUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    courseOffering?: CourseOfferingUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    courseOffering?: CourseOfferingUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: number
    name: string
  }

  export type CourseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourseOfferingCreateInput = {
    course: CourseCreateNestedOneWithoutCourseOfferingInput
    courseType: CourseTypeCreateNestedOneWithoutCourseOfferingInput
    registerations?: StudentRegisterationCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingUncheckedCreateInput = {
    id?: number
    courseId: number
    courseTypeId: number
    registerations?: StudentRegisterationUncheckedCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingUpdateInput = {
    course?: CourseUpdateOneRequiredWithoutCourseOfferingNestedInput
    courseType?: CourseTypeUpdateOneRequiredWithoutCourseOfferingNestedInput
    registerations?: StudentRegisterationUpdateManyWithoutCourseOfferingNestedInput
  }

  export type CourseOfferingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    courseTypeId?: IntFieldUpdateOperationsInput | number
    registerations?: StudentRegisterationUncheckedUpdateManyWithoutCourseOfferingNestedInput
  }

  export type CourseOfferingCreateManyInput = {
    id?: number
    courseId: number
    courseTypeId: number
  }

  export type CourseOfferingUpdateManyMutationInput = {

  }

  export type CourseOfferingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    courseTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentRegisterationCreateInput = {
    studentName: string
    email: string
    phoneNumber: string
    courseOffering: CourseOfferingCreateNestedOneWithoutRegisterationsInput
  }

  export type StudentRegisterationUncheckedCreateInput = {
    id?: number
    studentName: string
    email: string
    phoneNumber: string
    courseOfferingId: number
  }

  export type StudentRegisterationUpdateInput = {
    studentName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    courseOffering?: CourseOfferingUpdateOneRequiredWithoutRegisterationsNestedInput
  }

  export type StudentRegisterationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    courseOfferingId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentRegisterationCreateManyInput = {
    id?: number
    studentName: string
    email: string
    phoneNumber: string
    courseOfferingId: number
  }

  export type StudentRegisterationUpdateManyMutationInput = {
    studentName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type StudentRegisterationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    courseOfferingId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type CourseOfferingListRelationFilter = {
    every?: CourseOfferingWhereInput
    some?: CourseOfferingWhereInput
    none?: CourseOfferingWhereInput
  }

  export type CourseOfferingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CourseTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CourseTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CourseTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type CourseTypeScalarRelationFilter = {
    is?: CourseTypeWhereInput
    isNot?: CourseTypeWhereInput
  }

  export type StudentRegisterationListRelationFilter = {
    every?: StudentRegisterationWhereInput
    some?: StudentRegisterationWhereInput
    none?: StudentRegisterationWhereInput
  }

  export type StudentRegisterationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseOfferingCountOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    courseTypeId?: SortOrder
  }

  export type CourseOfferingAvgOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    courseTypeId?: SortOrder
  }

  export type CourseOfferingMaxOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    courseTypeId?: SortOrder
  }

  export type CourseOfferingMinOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    courseTypeId?: SortOrder
  }

  export type CourseOfferingSumOrderByAggregateInput = {
    id?: SortOrder
    courseId?: SortOrder
    courseTypeId?: SortOrder
  }

  export type CourseOfferingScalarRelationFilter = {
    is?: CourseOfferingWhereInput
    isNot?: CourseOfferingWhereInput
  }

  export type StudentRegisterationCountOrderByAggregateInput = {
    id?: SortOrder
    studentName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    courseOfferingId?: SortOrder
  }

  export type StudentRegisterationAvgOrderByAggregateInput = {
    id?: SortOrder
    courseOfferingId?: SortOrder
  }

  export type StudentRegisterationMaxOrderByAggregateInput = {
    id?: SortOrder
    studentName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    courseOfferingId?: SortOrder
  }

  export type StudentRegisterationMinOrderByAggregateInput = {
    id?: SortOrder
    studentName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    courseOfferingId?: SortOrder
  }

  export type StudentRegisterationSumOrderByAggregateInput = {
    id?: SortOrder
    courseOfferingId?: SortOrder
  }

  export type CourseOfferingCreateNestedManyWithoutCourseTypeInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseTypeInput, CourseOfferingUncheckedCreateWithoutCourseTypeInput> | CourseOfferingCreateWithoutCourseTypeInput[] | CourseOfferingUncheckedCreateWithoutCourseTypeInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseTypeInput | CourseOfferingCreateOrConnectWithoutCourseTypeInput[]
    createMany?: CourseOfferingCreateManyCourseTypeInputEnvelope
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
  }

  export type CourseOfferingUncheckedCreateNestedManyWithoutCourseTypeInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseTypeInput, CourseOfferingUncheckedCreateWithoutCourseTypeInput> | CourseOfferingCreateWithoutCourseTypeInput[] | CourseOfferingUncheckedCreateWithoutCourseTypeInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseTypeInput | CourseOfferingCreateOrConnectWithoutCourseTypeInput[]
    createMany?: CourseOfferingCreateManyCourseTypeInputEnvelope
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CourseOfferingUpdateManyWithoutCourseTypeNestedInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseTypeInput, CourseOfferingUncheckedCreateWithoutCourseTypeInput> | CourseOfferingCreateWithoutCourseTypeInput[] | CourseOfferingUncheckedCreateWithoutCourseTypeInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseTypeInput | CourseOfferingCreateOrConnectWithoutCourseTypeInput[]
    upsert?: CourseOfferingUpsertWithWhereUniqueWithoutCourseTypeInput | CourseOfferingUpsertWithWhereUniqueWithoutCourseTypeInput[]
    createMany?: CourseOfferingCreateManyCourseTypeInputEnvelope
    set?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    disconnect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    delete?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    update?: CourseOfferingUpdateWithWhereUniqueWithoutCourseTypeInput | CourseOfferingUpdateWithWhereUniqueWithoutCourseTypeInput[]
    updateMany?: CourseOfferingUpdateManyWithWhereWithoutCourseTypeInput | CourseOfferingUpdateManyWithWhereWithoutCourseTypeInput[]
    deleteMany?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CourseOfferingUncheckedUpdateManyWithoutCourseTypeNestedInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseTypeInput, CourseOfferingUncheckedCreateWithoutCourseTypeInput> | CourseOfferingCreateWithoutCourseTypeInput[] | CourseOfferingUncheckedCreateWithoutCourseTypeInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseTypeInput | CourseOfferingCreateOrConnectWithoutCourseTypeInput[]
    upsert?: CourseOfferingUpsertWithWhereUniqueWithoutCourseTypeInput | CourseOfferingUpsertWithWhereUniqueWithoutCourseTypeInput[]
    createMany?: CourseOfferingCreateManyCourseTypeInputEnvelope
    set?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    disconnect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    delete?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    update?: CourseOfferingUpdateWithWhereUniqueWithoutCourseTypeInput | CourseOfferingUpdateWithWhereUniqueWithoutCourseTypeInput[]
    updateMany?: CourseOfferingUpdateManyWithWhereWithoutCourseTypeInput | CourseOfferingUpdateManyWithWhereWithoutCourseTypeInput[]
    deleteMany?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
  }

  export type CourseOfferingCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput> | CourseOfferingCreateWithoutCourseInput[] | CourseOfferingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseInput | CourseOfferingCreateOrConnectWithoutCourseInput[]
    createMany?: CourseOfferingCreateManyCourseInputEnvelope
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
  }

  export type CourseOfferingUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput> | CourseOfferingCreateWithoutCourseInput[] | CourseOfferingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseInput | CourseOfferingCreateOrConnectWithoutCourseInput[]
    createMany?: CourseOfferingCreateManyCourseInputEnvelope
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
  }

  export type CourseOfferingUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput> | CourseOfferingCreateWithoutCourseInput[] | CourseOfferingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseInput | CourseOfferingCreateOrConnectWithoutCourseInput[]
    upsert?: CourseOfferingUpsertWithWhereUniqueWithoutCourseInput | CourseOfferingUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseOfferingCreateManyCourseInputEnvelope
    set?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    disconnect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    delete?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    update?: CourseOfferingUpdateWithWhereUniqueWithoutCourseInput | CourseOfferingUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseOfferingUpdateManyWithWhereWithoutCourseInput | CourseOfferingUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
  }

  export type CourseOfferingUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput> | CourseOfferingCreateWithoutCourseInput[] | CourseOfferingUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutCourseInput | CourseOfferingCreateOrConnectWithoutCourseInput[]
    upsert?: CourseOfferingUpsertWithWhereUniqueWithoutCourseInput | CourseOfferingUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CourseOfferingCreateManyCourseInputEnvelope
    set?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    disconnect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    delete?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    connect?: CourseOfferingWhereUniqueInput | CourseOfferingWhereUniqueInput[]
    update?: CourseOfferingUpdateWithWhereUniqueWithoutCourseInput | CourseOfferingUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CourseOfferingUpdateManyWithWhereWithoutCourseInput | CourseOfferingUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutCourseOfferingInput = {
    create?: XOR<CourseCreateWithoutCourseOfferingInput, CourseUncheckedCreateWithoutCourseOfferingInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseOfferingInput
    connect?: CourseWhereUniqueInput
  }

  export type CourseTypeCreateNestedOneWithoutCourseOfferingInput = {
    create?: XOR<CourseTypeCreateWithoutCourseOfferingInput, CourseTypeUncheckedCreateWithoutCourseOfferingInput>
    connectOrCreate?: CourseTypeCreateOrConnectWithoutCourseOfferingInput
    connect?: CourseTypeWhereUniqueInput
  }

  export type StudentRegisterationCreateNestedManyWithoutCourseOfferingInput = {
    create?: XOR<StudentRegisterationCreateWithoutCourseOfferingInput, StudentRegisterationUncheckedCreateWithoutCourseOfferingInput> | StudentRegisterationCreateWithoutCourseOfferingInput[] | StudentRegisterationUncheckedCreateWithoutCourseOfferingInput[]
    connectOrCreate?: StudentRegisterationCreateOrConnectWithoutCourseOfferingInput | StudentRegisterationCreateOrConnectWithoutCourseOfferingInput[]
    createMany?: StudentRegisterationCreateManyCourseOfferingInputEnvelope
    connect?: StudentRegisterationWhereUniqueInput | StudentRegisterationWhereUniqueInput[]
  }

  export type StudentRegisterationUncheckedCreateNestedManyWithoutCourseOfferingInput = {
    create?: XOR<StudentRegisterationCreateWithoutCourseOfferingInput, StudentRegisterationUncheckedCreateWithoutCourseOfferingInput> | StudentRegisterationCreateWithoutCourseOfferingInput[] | StudentRegisterationUncheckedCreateWithoutCourseOfferingInput[]
    connectOrCreate?: StudentRegisterationCreateOrConnectWithoutCourseOfferingInput | StudentRegisterationCreateOrConnectWithoutCourseOfferingInput[]
    createMany?: StudentRegisterationCreateManyCourseOfferingInputEnvelope
    connect?: StudentRegisterationWhereUniqueInput | StudentRegisterationWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutCourseOfferingNestedInput = {
    create?: XOR<CourseCreateWithoutCourseOfferingInput, CourseUncheckedCreateWithoutCourseOfferingInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCourseOfferingInput
    upsert?: CourseUpsertWithoutCourseOfferingInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCourseOfferingInput, CourseUpdateWithoutCourseOfferingInput>, CourseUncheckedUpdateWithoutCourseOfferingInput>
  }

  export type CourseTypeUpdateOneRequiredWithoutCourseOfferingNestedInput = {
    create?: XOR<CourseTypeCreateWithoutCourseOfferingInput, CourseTypeUncheckedCreateWithoutCourseOfferingInput>
    connectOrCreate?: CourseTypeCreateOrConnectWithoutCourseOfferingInput
    upsert?: CourseTypeUpsertWithoutCourseOfferingInput
    connect?: CourseTypeWhereUniqueInput
    update?: XOR<XOR<CourseTypeUpdateToOneWithWhereWithoutCourseOfferingInput, CourseTypeUpdateWithoutCourseOfferingInput>, CourseTypeUncheckedUpdateWithoutCourseOfferingInput>
  }

  export type StudentRegisterationUpdateManyWithoutCourseOfferingNestedInput = {
    create?: XOR<StudentRegisterationCreateWithoutCourseOfferingInput, StudentRegisterationUncheckedCreateWithoutCourseOfferingInput> | StudentRegisterationCreateWithoutCourseOfferingInput[] | StudentRegisterationUncheckedCreateWithoutCourseOfferingInput[]
    connectOrCreate?: StudentRegisterationCreateOrConnectWithoutCourseOfferingInput | StudentRegisterationCreateOrConnectWithoutCourseOfferingInput[]
    upsert?: StudentRegisterationUpsertWithWhereUniqueWithoutCourseOfferingInput | StudentRegisterationUpsertWithWhereUniqueWithoutCourseOfferingInput[]
    createMany?: StudentRegisterationCreateManyCourseOfferingInputEnvelope
    set?: StudentRegisterationWhereUniqueInput | StudentRegisterationWhereUniqueInput[]
    disconnect?: StudentRegisterationWhereUniqueInput | StudentRegisterationWhereUniqueInput[]
    delete?: StudentRegisterationWhereUniqueInput | StudentRegisterationWhereUniqueInput[]
    connect?: StudentRegisterationWhereUniqueInput | StudentRegisterationWhereUniqueInput[]
    update?: StudentRegisterationUpdateWithWhereUniqueWithoutCourseOfferingInput | StudentRegisterationUpdateWithWhereUniqueWithoutCourseOfferingInput[]
    updateMany?: StudentRegisterationUpdateManyWithWhereWithoutCourseOfferingInput | StudentRegisterationUpdateManyWithWhereWithoutCourseOfferingInput[]
    deleteMany?: StudentRegisterationScalarWhereInput | StudentRegisterationScalarWhereInput[]
  }

  export type StudentRegisterationUncheckedUpdateManyWithoutCourseOfferingNestedInput = {
    create?: XOR<StudentRegisterationCreateWithoutCourseOfferingInput, StudentRegisterationUncheckedCreateWithoutCourseOfferingInput> | StudentRegisterationCreateWithoutCourseOfferingInput[] | StudentRegisterationUncheckedCreateWithoutCourseOfferingInput[]
    connectOrCreate?: StudentRegisterationCreateOrConnectWithoutCourseOfferingInput | StudentRegisterationCreateOrConnectWithoutCourseOfferingInput[]
    upsert?: StudentRegisterationUpsertWithWhereUniqueWithoutCourseOfferingInput | StudentRegisterationUpsertWithWhereUniqueWithoutCourseOfferingInput[]
    createMany?: StudentRegisterationCreateManyCourseOfferingInputEnvelope
    set?: StudentRegisterationWhereUniqueInput | StudentRegisterationWhereUniqueInput[]
    disconnect?: StudentRegisterationWhereUniqueInput | StudentRegisterationWhereUniqueInput[]
    delete?: StudentRegisterationWhereUniqueInput | StudentRegisterationWhereUniqueInput[]
    connect?: StudentRegisterationWhereUniqueInput | StudentRegisterationWhereUniqueInput[]
    update?: StudentRegisterationUpdateWithWhereUniqueWithoutCourseOfferingInput | StudentRegisterationUpdateWithWhereUniqueWithoutCourseOfferingInput[]
    updateMany?: StudentRegisterationUpdateManyWithWhereWithoutCourseOfferingInput | StudentRegisterationUpdateManyWithWhereWithoutCourseOfferingInput[]
    deleteMany?: StudentRegisterationScalarWhereInput | StudentRegisterationScalarWhereInput[]
  }

  export type CourseOfferingCreateNestedOneWithoutRegisterationsInput = {
    create?: XOR<CourseOfferingCreateWithoutRegisterationsInput, CourseOfferingUncheckedCreateWithoutRegisterationsInput>
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutRegisterationsInput
    connect?: CourseOfferingWhereUniqueInput
  }

  export type CourseOfferingUpdateOneRequiredWithoutRegisterationsNestedInput = {
    create?: XOR<CourseOfferingCreateWithoutRegisterationsInput, CourseOfferingUncheckedCreateWithoutRegisterationsInput>
    connectOrCreate?: CourseOfferingCreateOrConnectWithoutRegisterationsInput
    upsert?: CourseOfferingUpsertWithoutRegisterationsInput
    connect?: CourseOfferingWhereUniqueInput
    update?: XOR<XOR<CourseOfferingUpdateToOneWithWhereWithoutRegisterationsInput, CourseOfferingUpdateWithoutRegisterationsInput>, CourseOfferingUncheckedUpdateWithoutRegisterationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CourseOfferingCreateWithoutCourseTypeInput = {
    course: CourseCreateNestedOneWithoutCourseOfferingInput
    registerations?: StudentRegisterationCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingUncheckedCreateWithoutCourseTypeInput = {
    id?: number
    courseId: number
    registerations?: StudentRegisterationUncheckedCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingCreateOrConnectWithoutCourseTypeInput = {
    where: CourseOfferingWhereUniqueInput
    create: XOR<CourseOfferingCreateWithoutCourseTypeInput, CourseOfferingUncheckedCreateWithoutCourseTypeInput>
  }

  export type CourseOfferingCreateManyCourseTypeInputEnvelope = {
    data: CourseOfferingCreateManyCourseTypeInput | CourseOfferingCreateManyCourseTypeInput[]
    skipDuplicates?: boolean
  }

  export type CourseOfferingUpsertWithWhereUniqueWithoutCourseTypeInput = {
    where: CourseOfferingWhereUniqueInput
    update: XOR<CourseOfferingUpdateWithoutCourseTypeInput, CourseOfferingUncheckedUpdateWithoutCourseTypeInput>
    create: XOR<CourseOfferingCreateWithoutCourseTypeInput, CourseOfferingUncheckedCreateWithoutCourseTypeInput>
  }

  export type CourseOfferingUpdateWithWhereUniqueWithoutCourseTypeInput = {
    where: CourseOfferingWhereUniqueInput
    data: XOR<CourseOfferingUpdateWithoutCourseTypeInput, CourseOfferingUncheckedUpdateWithoutCourseTypeInput>
  }

  export type CourseOfferingUpdateManyWithWhereWithoutCourseTypeInput = {
    where: CourseOfferingScalarWhereInput
    data: XOR<CourseOfferingUpdateManyMutationInput, CourseOfferingUncheckedUpdateManyWithoutCourseTypeInput>
  }

  export type CourseOfferingScalarWhereInput = {
    AND?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
    OR?: CourseOfferingScalarWhereInput[]
    NOT?: CourseOfferingScalarWhereInput | CourseOfferingScalarWhereInput[]
    id?: IntFilter<"CourseOffering"> | number
    courseId?: IntFilter<"CourseOffering"> | number
    courseTypeId?: IntFilter<"CourseOffering"> | number
  }

  export type CourseOfferingCreateWithoutCourseInput = {
    courseType: CourseTypeCreateNestedOneWithoutCourseOfferingInput
    registerations?: StudentRegisterationCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingUncheckedCreateWithoutCourseInput = {
    id?: number
    courseTypeId: number
    registerations?: StudentRegisterationUncheckedCreateNestedManyWithoutCourseOfferingInput
  }

  export type CourseOfferingCreateOrConnectWithoutCourseInput = {
    where: CourseOfferingWhereUniqueInput
    create: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput>
  }

  export type CourseOfferingCreateManyCourseInputEnvelope = {
    data: CourseOfferingCreateManyCourseInput | CourseOfferingCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type CourseOfferingUpsertWithWhereUniqueWithoutCourseInput = {
    where: CourseOfferingWhereUniqueInput
    update: XOR<CourseOfferingUpdateWithoutCourseInput, CourseOfferingUncheckedUpdateWithoutCourseInput>
    create: XOR<CourseOfferingCreateWithoutCourseInput, CourseOfferingUncheckedCreateWithoutCourseInput>
  }

  export type CourseOfferingUpdateWithWhereUniqueWithoutCourseInput = {
    where: CourseOfferingWhereUniqueInput
    data: XOR<CourseOfferingUpdateWithoutCourseInput, CourseOfferingUncheckedUpdateWithoutCourseInput>
  }

  export type CourseOfferingUpdateManyWithWhereWithoutCourseInput = {
    where: CourseOfferingScalarWhereInput
    data: XOR<CourseOfferingUpdateManyMutationInput, CourseOfferingUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutCourseOfferingInput = {
    name: string
  }

  export type CourseUncheckedCreateWithoutCourseOfferingInput = {
    id?: number
    name: string
  }

  export type CourseCreateOrConnectWithoutCourseOfferingInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCourseOfferingInput, CourseUncheckedCreateWithoutCourseOfferingInput>
  }

  export type CourseTypeCreateWithoutCourseOfferingInput = {
    name: string
  }

  export type CourseTypeUncheckedCreateWithoutCourseOfferingInput = {
    id?: number
    name: string
  }

  export type CourseTypeCreateOrConnectWithoutCourseOfferingInput = {
    where: CourseTypeWhereUniqueInput
    create: XOR<CourseTypeCreateWithoutCourseOfferingInput, CourseTypeUncheckedCreateWithoutCourseOfferingInput>
  }

  export type StudentRegisterationCreateWithoutCourseOfferingInput = {
    studentName: string
    email: string
    phoneNumber: string
  }

  export type StudentRegisterationUncheckedCreateWithoutCourseOfferingInput = {
    id?: number
    studentName: string
    email: string
    phoneNumber: string
  }

  export type StudentRegisterationCreateOrConnectWithoutCourseOfferingInput = {
    where: StudentRegisterationWhereUniqueInput
    create: XOR<StudentRegisterationCreateWithoutCourseOfferingInput, StudentRegisterationUncheckedCreateWithoutCourseOfferingInput>
  }

  export type StudentRegisterationCreateManyCourseOfferingInputEnvelope = {
    data: StudentRegisterationCreateManyCourseOfferingInput | StudentRegisterationCreateManyCourseOfferingInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutCourseOfferingInput = {
    update: XOR<CourseUpdateWithoutCourseOfferingInput, CourseUncheckedUpdateWithoutCourseOfferingInput>
    create: XOR<CourseCreateWithoutCourseOfferingInput, CourseUncheckedCreateWithoutCourseOfferingInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCourseOfferingInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCourseOfferingInput, CourseUncheckedUpdateWithoutCourseOfferingInput>
  }

  export type CourseUpdateWithoutCourseOfferingInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourseUncheckedUpdateWithoutCourseOfferingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourseTypeUpsertWithoutCourseOfferingInput = {
    update: XOR<CourseTypeUpdateWithoutCourseOfferingInput, CourseTypeUncheckedUpdateWithoutCourseOfferingInput>
    create: XOR<CourseTypeCreateWithoutCourseOfferingInput, CourseTypeUncheckedCreateWithoutCourseOfferingInput>
    where?: CourseTypeWhereInput
  }

  export type CourseTypeUpdateToOneWithWhereWithoutCourseOfferingInput = {
    where?: CourseTypeWhereInput
    data: XOR<CourseTypeUpdateWithoutCourseOfferingInput, CourseTypeUncheckedUpdateWithoutCourseOfferingInput>
  }

  export type CourseTypeUpdateWithoutCourseOfferingInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourseTypeUncheckedUpdateWithoutCourseOfferingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StudentRegisterationUpsertWithWhereUniqueWithoutCourseOfferingInput = {
    where: StudentRegisterationWhereUniqueInput
    update: XOR<StudentRegisterationUpdateWithoutCourseOfferingInput, StudentRegisterationUncheckedUpdateWithoutCourseOfferingInput>
    create: XOR<StudentRegisterationCreateWithoutCourseOfferingInput, StudentRegisterationUncheckedCreateWithoutCourseOfferingInput>
  }

  export type StudentRegisterationUpdateWithWhereUniqueWithoutCourseOfferingInput = {
    where: StudentRegisterationWhereUniqueInput
    data: XOR<StudentRegisterationUpdateWithoutCourseOfferingInput, StudentRegisterationUncheckedUpdateWithoutCourseOfferingInput>
  }

  export type StudentRegisterationUpdateManyWithWhereWithoutCourseOfferingInput = {
    where: StudentRegisterationScalarWhereInput
    data: XOR<StudentRegisterationUpdateManyMutationInput, StudentRegisterationUncheckedUpdateManyWithoutCourseOfferingInput>
  }

  export type StudentRegisterationScalarWhereInput = {
    AND?: StudentRegisterationScalarWhereInput | StudentRegisterationScalarWhereInput[]
    OR?: StudentRegisterationScalarWhereInput[]
    NOT?: StudentRegisterationScalarWhereInput | StudentRegisterationScalarWhereInput[]
    id?: IntFilter<"StudentRegisteration"> | number
    studentName?: StringFilter<"StudentRegisteration"> | string
    email?: StringFilter<"StudentRegisteration"> | string
    phoneNumber?: StringFilter<"StudentRegisteration"> | string
    courseOfferingId?: IntFilter<"StudentRegisteration"> | number
  }

  export type CourseOfferingCreateWithoutRegisterationsInput = {
    course: CourseCreateNestedOneWithoutCourseOfferingInput
    courseType: CourseTypeCreateNestedOneWithoutCourseOfferingInput
  }

  export type CourseOfferingUncheckedCreateWithoutRegisterationsInput = {
    id?: number
    courseId: number
    courseTypeId: number
  }

  export type CourseOfferingCreateOrConnectWithoutRegisterationsInput = {
    where: CourseOfferingWhereUniqueInput
    create: XOR<CourseOfferingCreateWithoutRegisterationsInput, CourseOfferingUncheckedCreateWithoutRegisterationsInput>
  }

  export type CourseOfferingUpsertWithoutRegisterationsInput = {
    update: XOR<CourseOfferingUpdateWithoutRegisterationsInput, CourseOfferingUncheckedUpdateWithoutRegisterationsInput>
    create: XOR<CourseOfferingCreateWithoutRegisterationsInput, CourseOfferingUncheckedCreateWithoutRegisterationsInput>
    where?: CourseOfferingWhereInput
  }

  export type CourseOfferingUpdateToOneWithWhereWithoutRegisterationsInput = {
    where?: CourseOfferingWhereInput
    data: XOR<CourseOfferingUpdateWithoutRegisterationsInput, CourseOfferingUncheckedUpdateWithoutRegisterationsInput>
  }

  export type CourseOfferingUpdateWithoutRegisterationsInput = {
    course?: CourseUpdateOneRequiredWithoutCourseOfferingNestedInput
    courseType?: CourseTypeUpdateOneRequiredWithoutCourseOfferingNestedInput
  }

  export type CourseOfferingUncheckedUpdateWithoutRegisterationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    courseTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseOfferingCreateManyCourseTypeInput = {
    id?: number
    courseId: number
  }

  export type CourseOfferingUpdateWithoutCourseTypeInput = {
    course?: CourseUpdateOneRequiredWithoutCourseOfferingNestedInput
    registerations?: StudentRegisterationUpdateManyWithoutCourseOfferingNestedInput
  }

  export type CourseOfferingUncheckedUpdateWithoutCourseTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    registerations?: StudentRegisterationUncheckedUpdateManyWithoutCourseOfferingNestedInput
  }

  export type CourseOfferingUncheckedUpdateManyWithoutCourseTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseOfferingCreateManyCourseInput = {
    id?: number
    courseTypeId: number
  }

  export type CourseOfferingUpdateWithoutCourseInput = {
    courseType?: CourseTypeUpdateOneRequiredWithoutCourseOfferingNestedInput
    registerations?: StudentRegisterationUpdateManyWithoutCourseOfferingNestedInput
  }

  export type CourseOfferingUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseTypeId?: IntFieldUpdateOperationsInput | number
    registerations?: StudentRegisterationUncheckedUpdateManyWithoutCourseOfferingNestedInput
  }

  export type CourseOfferingUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    courseTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentRegisterationCreateManyCourseOfferingInput = {
    id?: number
    studentName: string
    email: string
    phoneNumber: string
  }

  export type StudentRegisterationUpdateWithoutCourseOfferingInput = {
    studentName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type StudentRegisterationUncheckedUpdateWithoutCourseOfferingInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type StudentRegisterationUncheckedUpdateManyWithoutCourseOfferingInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}