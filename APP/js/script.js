    const CATEGORIES = [
      {key:"all", label:"Todos"},
      {key:"apis", label:"APIs y servicios"},
      {key:"db", label:"Bases de datos"},
      {key:"dev", label:"Herramientas de desarrollo"},
      {key:"host", label:"Hosting y deployment"},
    ];

    const RESOURCES = [
      // APIs y servicios
      {name:"FastAPI", category:"apis", url:"https://fastapi.tiangolo.com/", description:"Framework moderno y rápido para construir APIs con Python 3.7+ basado en type hints.", tags:["python","rest","openapi"]},
      {name:"Express.js", category:"apis", url:"https://expressjs.com/", description:"Framework web minimalista y flexible para Node.js.", tags:["node","rest"]},
      {name:"NestJS", category:"apis", url:"https://nestjs.com/", description:"Framework progresivo de Node.js para aplicaciones escalables del lado del servidor.", tags:["typescript","rest","di"]},
      {name:"Spring Boot", category:"apis", url:"https://spring.io/projects/spring-boot", description:"Framework Java para crear microservicios y APIs de manera productiva.", tags:["java","rest","microservices"]},
      {name:"Django REST Framework", category:"apis", url:"https://www.django-rest-framework.org/", description:"Toolkit potente y flexible para construir APIs con Django.", tags:["python","rest"]},
      {name:"Flask", category:"apis", url:"https://flask.palletsprojects.com/", description:"Microframework de Python para APIs y servicios sencillos.", tags:["python","rest"]},
      {name:"ASP.NET Core", category:"apis", url:"https://dotnet.microsoft.com/apps/aspnet", description:"Framework multiplataforma de .NET para construir APIs de alto rendimiento.", tags:["dotnet","csharp","rest"]},
      {name:"Gin", category:"apis", url:"https://gin-gonic.com/", description:"Framework HTTP para Go con alto rendimiento.", tags:["go","rest"]},
      {name:"Fiber", category:"apis", url:"https://gofiber.io/", description:"Framework web inspirado en Express para Go.", tags:["go","rest"]},
      {name:"GraphQL", category:"apis", url:"https://graphql.org/", description:"Lenguaje de consulta para APIs y runtime para ejecutarlas.", tags:["graphql","schema"]},
      {name:"Apollo Server", category:"apis", url:"https://www.apollographql.com/docs/apollo-server/", description:"Servidor GraphQL fácil de integrar con Node.js.", tags:["graphql","node"]},
      {name:"Hasura", category:"apis", url:"https://hasura.io/", description:"Motor GraphQL instantáneo sobre Postgres con permisos granulares.", tags:["graphql","postgres","realtime"]},
      {name:"tRPC", category:"apis", url:"https://trpc.io/", description:"Framework TypeScript para construir APIs type-safe sin necesidad de esquemas.", tags:["typescript","rpc"]},
      {name:"gRPC", category:"apis", url:"https://grpc.io/", description:"Framework RPC de alto rendimiento con Protocol Buffers.", tags:["rpc","proto"]},
      {name:"Hapi", category:"apis", url:"https://hapi.dev/", description:"Framework robusto para construir servicios en Node.js.", tags:["node","rest"]},
      {name:"Koa", category:"apis", url:"https://koajs.com/", description:"Framework minimalista de Node.js con async/await.", tags:["node","rest"]},
      {name:"Sails.js", category:"apis", url:"https://sailsjs.com/", description:"Framework MVC para Node con enfoque en APIs y sockets.", tags:["node","rest","sockets"]},
      {name:"Laravel", category:"apis", url:"https://laravel.com/", description:"Framework PHP con herramientas integradas para construir APIs.", tags:["php","rest"]},
      {name:"AdonisJS", category:"apis", url:"https://adonisjs.com/", description:"Framework MVC para Node.js con enfoque en productividad.", tags:["node","rest"]},
      {name:"Phoenix", category:"apis", url:"https://www.phoenixframework.org/", description:"Framework Elixir para aplicaciones escalables y canales en tiempo real.", tags:["elixir","rest","realtime"]},

      // Bases de datos
      {name:"PostgreSQL", category:"db", url:"https://www.postgresql.org/", description:"Sistema de base de datos relacional open-source potente y avanzado.", tags:["sql","relational"]},
      {name:"MySQL", category:"db", url:"https://www.mysql.com/", description:"Base de datos relacional popular y ampliamente soportada.", tags:["sql","relational"]},
      {name:"MariaDB", category:"db", url:"https://mariadb.org/", description:"Fork comunitario de MySQL con mejoras de rendimiento.", tags:["sql","relational"]},
      {name:"SQLite", category:"db", url:"https://sqlite.org/", description:"Base de datos embebida ligera y sin servidor.", tags:["sql","embedded"]},
      {name:"SQL Server", category:"db", url:"https://www.microsoft.com/sql-server", description:"Base de datos empresarial de Microsoft con amplia integración.", tags:["sql","enterprise"]},
      {name:"Oracle Database", category:"db", url:"https://www.oracle.com/database/", description:"Base de datos relacional empresarial de alto rendimiento.", tags:["sql","enterprise"]},
      {name:"CockroachDB", category:"db", url:"https://www.cockroachlabs.com/product/", description:"Base de datos distribuida, tolerante a fallos y compatible con Postgres.", tags:["distributed","sql"]},
      {name:"TiDB", category:"db", url:"https://www.pingcap.com/tidb/", description:"Base de datos NewSQL distribuida compatible con MySQL.", tags:["distributed","sql"]},
      {name:"TimescaleDB", category:"db", url:"https://www.timescale.com/", description:"Extensión de Postgres para series de tiempo.", tags:["timeseries","postgres"]},
      {name:"ClickHouse", category:"db", url:"https://clickhouse.com/", description:"Base de datos columnar de alto rendimiento para analítica.", tags:["analytics","columnar"]},
      {name:"MongoDB", category:"db", url:"https://www.mongodb.com/", description:"Base de datos documental flexible y escalable.", tags:["nosql","document"]},
      {name:"Cassandra", category:"db", url:"https://cassandra.apache.org/", description:"Base de datos distribuida para grandes volúmenes y alta disponibilidad.", tags:["nosql","wide-column"]},
      {name:"Redis", category:"db", url:"https://redis.io/", description:"Almacén en memoria para caching y estructuras de datos.", tags:["in-memory","cache"]},
      {name:"Elasticsearch", category:"db", url:"https://www.elastic.co/elasticsearch/", description:"Motor de búsqueda y analítica distribuido.", tags:["search","index"]},
      {name:"Neo4j", category:"db", url:"https://neo4j.com/", description:"Base de datos de grafos para relaciones complejas.", tags:["graph","nosql"]},
      {name:"DynamoDB", category:"db", url:"https://aws.amazon.com/dynamodb/", description:"Base NoSQL totalmente gestionada por AWS.", tags:["nosql","managed"]},
      {name:"Supabase", category:"db", url:"https://supabase.com/", description:"Backend Postgres con autenticación y almacenamiento, open-source.", tags:["postgres","backend-as-a-service"]},
      {name:"PlanetScale", category:"db", url:"https://planetscale.com/", description:"Base de datos MySQL serverless sobre Vitess.", tags:["mysql","serverless"]},
      {name:"Fauna", category:"db", url:"https://fauna.com/", description:"Base de datos serverless con transacciones globales.", tags:["serverless","nosql"]},
      {name:"Firestore", category:"db", url:"https://firebase.google.com/products/firestore", description:"Base de datos documental en tiempo real de Firebase.", tags:["nosql","realtime"]},

      // Herramientas de desarrollo
      {name:"Prisma", category:"dev", url:"https://www.prisma.io/", description:"ORM moderno para Node.js y TypeScript.", tags:["orm","typescript"]},
      {name:"TypeORM", category:"dev", url:"https://typeorm.io/", description:"ORM para TypeScript y JavaScript con soporte a múltiples DB.", tags:["orm","typescript"]},
      {name:"Sequelize", category:"dev", url:"https://sequelize.org/", description:"ORM para Node.js con soporte a Postgres, MySQL, MariaDB, SQLite y MSSQL.", tags:["orm","node"]},
      {name:"Drizzle ORM", category:"dev", url:"https://orm.drizzle.team/", description:"Query builder/ORM type-safe para TypeScript.", tags:["orm","typescript"]},
      {name:"Knex.js", category:"dev", url:"https://knexjs.org/", description:"Query builder SQL para Node.js.", tags:["query-builder","node"]},
      {name:"SQLAlchemy", category:"dev", url:"https://www.sqlalchemy.org/", description:"ORM y toolkit SQL para Python.", tags:["orm","python"]},
      {name:"Hibernate", category:"dev", url:"https://hibernate.org/", description:"ORM maduro para Java.", tags:["orm","java"]},
      {name:"Mongoose", category:"dev", url:"https://mongoosejs.com/", description:"ODM para MongoDB en Node.js.", tags:["odm","mongodb"]},
      {name:"Flyway", category:"dev", url:"https://flywaydb.org/", description:"Migraciones de base de datos simples y auditables.", tags:["migrations","db"]},
      {name:"Liquibase", category:"dev", url:"https://www.liquibase.org/", description:"Control de cambios de base de datos con trazabilidad.", tags:["migrations","db"]},
      {name:"pgAdmin", category:"dev", url:"https://www.pgadmin.org/", description:"Herramienta gráfica para administración de PostgreSQL.", tags:["admin","postgres"]},
      {name:"DBeaver", category:"dev", url:"https://dbeaver.io/", description:"Cliente universal de bases de datos.", tags:["client","db"]},
      {name:"TablePlus", category:"dev", url:"https://tableplus.com/", description:"Cliente moderno para múltiples bases de datos.", tags:["client","db"]},
      {name:"Postman", category:"dev", url:"https://www.postman.com/", description:"Plataforma para pruebas y orquestación de APIs.", tags:["api","testing"]},
      {name:"Insomnia", category:"dev", url:"https://insomnia.rest/", description:"Cliente y suite para diseño y pruebas de APIs.", tags:["api","testing"]},
      {name:"Swagger / OpenAPI", category:"dev", url:"https://swagger.io/", description:"Especificación y herramientas para documentar y probar APIs.", tags:["openapi","docs"]},
      {name:"Hoppscotch", category:"dev", url:"https://hoppscotch.io/", description:"Cliente web ligero para APIs.", tags:["api","testing"]},
      {name:"k6", category:"dev", url:"https://k6.io/", description:"Pruebas de carga para APIs y servicios.", tags:["load-testing","performance"]},
      {name:"Locust", category:"dev", url:"https://locust.io/", description:"Herramienta de pruebas de carga basada en Python.", tags:["load-testing","python"]},
      {name:"Airflow", category:"dev", url:"https://airflow.apache.org/", description:"Orquestación de workflows de datos.", tags:["orchestration","etl"]},

      // Hosting y deployment
      {name:"Docker", category:"host", url:"https://www.docker.com/", description:"Contenedores para empaquetar y desplegar aplicaciones.", tags:["containers","deployment"]},
      {name:"Kubernetes", category:"host", url:"https://kubernetes.io/", description:"Orquestación de contenedores a gran escala.", tags:["containers","orchestration"]},
      {name:"Helm", category:"host", url:"https://helm.sh/", description:"Gestión de paquetes para Kubernetes.", tags:["k8s","charts"]},
      {name:"AWS", category:"host", url:"https://aws.amazon.com/", description:"Plataforma de cloud con servicios para computo, almacenamiento y bases de datos.", tags:["cloud","iaas","paas"]},
      {name:"Azure", category:"host", url:"https://azure.microsoft.com/", description:"Plataforma cloud de Microsoft con servicios gestionados.", tags:["cloud","iaas","paas"]},
      {name:"Google Cloud", category:"host", url:"https://cloud.google.com/", description:"Plataforma cloud con servicios de datos y ML.", tags:["cloud","iaas","paas"]},
      {name:"DigitalOcean", category:"host", url:"https://www.digitalocean.com/", description:"Infraestructura simple y accesible para desplegar apps.", tags:["cloud","vps"]},
      {name:"Render", category:"host", url:"https://render.com/", description:"PaaS para desplegar servicios, cron jobs y DBs.", tags:["paas","deployment"]},
      {name:"Railway", category:"host", url:"https://railway.app/", description:"Plataforma para desplegar servicios y bases de datos rápidamente.", tags:["paas","deployment"]},
      {name:"Heroku", category:"host", url:"https://www.heroku.com/", description:"PaaS clásico para desplegar aplicaciones y APIs.", tags:["paas","deployment"]},
      {name:"Vercel", category:"host", url:"https://vercel.com/", description:"Plataforma para frontends y serverless functions.", tags:["serverless","frontend"]},
      {name:"Netlify", category:"host", url:"https://www.netlify.com/", description:"Hosting estático y funciones serverless.", tags:["serverless","static"]},
    ];

    // Render dinámico
    const $grid = document.getElementById('grid');
    const $filters = document.getElementById('filters');
    const $search = document.getElementById('searchInput');
    const $empty = document.getElementById('empty');

    const $totalCount = document.getElementById('totalCount');
    const $categoryCount = document.getElementById('categoryCount');

    let state = { category:"all", query:"" };

    function renderFilters(){
      $filters.innerHTML = "";
      CATEGORIES.forEach(cat=>{
        const btn = document.createElement('button');
        btn.className = 'filter-btn' + (state.category===cat.key ? ' active':'');
        btn.textContent = cat.label + (cat.key !== 'all' ? ` (${RESOURCES.filter(r=>r.category===cat.key).length})` : "");
        btn.onclick = ()=>{ state.category = cat.key; renderAll(); };
        $filters.appendChild(btn);
      });
      $totalCount.textContent = RESOURCES.length.toString();
      $categoryCount.textContent = (CATEGORIES.length - 1).toString();
    }

    function resourceBadge(cat){
      switch(cat){
        case 'apis': return '<span class="badge apis">APIs y servicios</span>';
        case 'db': return '<span class="badge db">Bases de datos</span>';
        case 'dev': return '<span class="badge dev">Herramientas de desarrollo</span>';
        case 'host': return '<span class="badge host">Hosting y deployment</span>';
        default: return '';
      }
    }

    function matches(r){
      const q = state.query.trim().toLowerCase();
      const catMatch = state.category === 'all' || r.category === state.category;
      if(!q) return catMatch;
      const text = (r.name + " " + r.description + " " + r.tags.join(" ")).toLowerCase();
      return catMatch && text.includes(q);
    }

    function renderGrid(){
      const items = RESOURCES.filter(matches);
      $grid.innerHTML = items.map(r=>`
        <article class="card">
          <h3>${r.name}</h3>
          <div class="badges">${resourceBadge(r.category)}</div>
          <p>${r.description}</p>
          <div class="actions">
            <a href="${r.url}" target="_blank" rel="noopener noreferrer" class="btn">Visitar sitio</a>
            <button class="btn secondary" onclick="copyLink('${encodeURI(r.url)}')">Copiar link</button>
          </div>
        </article>
      `).join("");
      $empty.style.display = items.length ? 'none' : 'block';
    }

    function copyLink(url){
      navigator.clipboard.writeText(decodeURI(url)).then(()=>{
        const prev = document.querySelector('.small');
        if(prev){ prev.textContent = 'Link copiado al portapapeles.'; }
      });
    }

    function renderAll(){ renderFilters(); renderGrid(); }

    $search.addEventListener('input', e=>{ state.query = e.target.value; renderGrid(); });

    renderAll();