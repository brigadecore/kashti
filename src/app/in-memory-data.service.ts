import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [
      {
        'id': 'brigade-830c16d4aaf6f5490937ad719afd8490a5bcbef064d397411043ac',
        'name': 'technosophos/coffeesnob',
        'repo': {
          'name': 'github.com/technosophos/coffeesnob',
          'cloneURL': 'https://github.com/technosophos/coffeesnob.git'
        },
        'kubernetes': {
          'namespace': 'default',
          'vcsSidecar': ''
        },
        'github': {},
        'secrets': {}
      },
      {
        'id': 'brigade-69bec354fc350605c51bc16d4dd2b6073',
        'name': 'Azure/kashti',
        'repo': {
          'name': 'github.com/Azure/kashti',
          'cloneURL': 'https://github.com/Azure/kashti.git'
        },
        'kubernetes': {
          'namespace': 'default',
          'vcsSidecar': ''
        },
        'github': {},
        'secrets': {}
      },
      {
        'id': 'brigade-4ed6c77c221e5130f7b593a5705081f543c2762b',
        'name': 'seanknox/monkeys',
        'repo': {
          'name': 'github.com/seanknox/monkeys',
          'cloneURL': 'https://github.com/seanknox/monkeys'
        },
        'kubernetes': {
          'namespace': 'default',
          'vcsSidecar': ''
        },
        'github': {},
        'secrets': {}
      }
    ];
    const builds = [
      {
        'id': '01byy6vn3fanaypqpve7m1jwsf',
        'project_id': 'brigade-830c16d4aaf6f5490937ad719afd8490a5bcbef064d397411043ac',
        'type': 'exec',
        'provider': 'github',
        'commit': 'master',
        'script': 'Y29uc3QgeyBldmVudHMsIEpvYiwgR3JvdXAgfSA9IHJlcXVpcmUoImJyaWdhZGllciIpCgpldmVudHMub24oImV4ZWMiLCAoKSA9PiB7CiAgY29uc29sZS5sb2coIlxuID09PT4gd2VlZWVcbiIpCgogIHZhciBqMSA9IG5ldyBKb2IoImhlbGxvIiwgImFscGluZTozLjYiKQoKICBqMS50YXNrcyA9IFsKICAgICJlY2hvIGhlbGxvIgogIF0KCiAgdmFyIGoyID0gbmV3IEpvYigid29ybGQiLCAiYWxwaW5lOjMuNiIsIFsiZWNobyBoZWxsbzIiXSkKCiAgR3JvdXAucnVuRWFjaChbajEsIGoyXSkKfSkK',
        'worker': {
          'id': 'brigade-worker-01byy6vn3fanaypqpve7m1jwsf-master',
          'build_id': '01byy6vn3fanaypqpve7m1jwsf',
          'project_id': 'brigade-830c16d4aaf6f5490937ad719afd8490a5bcbef064d397411043ac',
          'start_time': '2017-12-23T07:31:55Z',
          'end_time': '2017-12-23T07:32:59Z',
          'exit_code': 0,
          'status': 'Succeeded'
        }
      },
      {
        'id': '01byy6ymq8p9md8z31rcmtry4a',
        'project_id': 'brigade-69bec354fc350605c51bc16d4dd2b6073',
        'type': 'exec',
        'provider': 'brigade-cli',
        'commit': 'master',
        'script': 'Y29uc3QgeyBldmVudHMsIEpvYiwgR3JvdXAgfSA9IHJlcXVpcmUoImJyaWdhZGllciIpCgpldmVudHMub24oImV4ZWMiLCAoKSA9PiB7CiAgY29uc29sZS5sb2coIlxuID09PT4gd2VlZWVcbiIpCgogIHZhciBqMSA9IG5ldyBKb2IoImhlbGxvIiwgImFscGluZTozLjYiKQoKICBqMS50YXNrcyA9IFsKICAgICJlY2hvIGhlbGxvIgogIF0KCiAgdmFyIGoyID0gbmV3IEpvYigid29ybGQiLCAiYWxwaW5lOjMuNiIsIFsiZWNobyBoZWxsbzIiXSkKCiAgR3JvdXAucnVuRWFjaChbajEsIGoyXSkKfSkK',
        'worker': {
          'id': 'brigade-worker-01byy6ymq8p9md8z31rcmtry4a-master',
          'build_id': '01byy6ymq8p9md8z31rcmtry4a',
          'project_id': 'brigade-69bec354fc350605c51bc16d4dd2b6073',
          'start_time': '2018-02-26T22:57:27Z',
          'end_time': '2018-02-26T22:57:56Z',
          'exit_code': 0,
          'status': 'Succeeded'
        }
      },
      {
        'id': '01byy7kmx6abe3te3afmsm3q6h',
        'project_id': 'brigade-4ed6c77c221e5130f7b593a5705081f543c2762b',
        'type': 'exec',
        'provider': 'brigade-cli',
        'commit': 'master',
        'script': 'Y29uc3QgeyBldmVudHMsIEpvYiwgR3JvdXAgfSA9IHJlcXVpcmUoImJyaWdhZGllciIpCgpldmVudHMub24oImV4ZWMiLCAoKSA9PiB7CiAgY29uc29sZS5sb2coIlxuID09PT4gd2VlZWVcbiIpCgogIHZhciBqMSA9IG5ldyBKb2IoImhlbGxvIiwgImFscGluZTozLjYiKQoKICBqMS50YXNrcyA9IFsKICAgICJlY2hvIGhlbGxvIgogIF0KCiAgdmFyIGoyID0gbmV3IEpvYigid29ybGQiLCAiYWxwaW5lOjMuNiIsIFsiZWNobyBoZWxsbzIiXSkKCiAgR3JvdXAucnVuRWFjaChbajEsIGoyXSkKfSkK',
        'worker': {
          'id': 'brigade-worker-01byy7kmx6abe3te3afmsm3q6h-master',
          'build_id': '01byy7kmx6abe3te3afmsm3q6h',
          'project_id': 'brigade-4ed6c77c221e5130f7b593a5705081f543c2762b',
          'start_time': '2017-11-14T21:40:22Z',
          'end_time': '2017-11-14T21:40:31Z',
          'exit_code': 1,
          'status': 'Failed'
        }
      }
    ];
    const projectBuilds = [
      {
        'project': {
          'id': 'brigade-830c16d4aaf6f5490937ad719afd8490a5bcbef064d397411043ac',
          'name': 'technosophos/coffeesnob',
          'repo': {
            'name': 'github.com/technosophos/coffeesnob',
            'cloneURL': 'https://github.com/technosophos/coffeesnob.git'
          },
          'kubernetes': {
            'namespace': 'default',
            'vcsSidecar': ''
          },
          'github': {},
          'secrets': {}
        },
        'lastBuild': {
          'id': '01c0matkmjpjkrbfcnhfyjerfh',
          'project_id': 'brigade-830c16d4aaf6f5490937ad719afd8490a5bcbef064d397411043ac',
          'type': 'pull_request',
          'provider': 'github',
          'commit': '4ed6c77c221e5130f7b593a5705081f543c2762b',
          'payload': '',
          'script': 'Y29uc3QgeyBldmVudHMsIEpvYiB9ID0gcmVxdWlyZSgiYnJpZ2FkaWVyIik7CgpldmVudHMub24oInB1bGxfcmVxdWVzdCIpLCAoZSwgcCkgPT4gewogIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoZS5wYXlsb2FkKSkKfSk7Cg==',
          'worker': {
            'id': 'brigade-worker-01c0matkmjpjkrbfcnhfyjerfh-ad0703ac',
            'build_id': '01c0matkmjpjkrbfcnhfyjerfh',
            'project_id': 'brigade-830c16d4aaf6f5490937ad719afd8490a5bcbef064d397411043ac',
            'start_time': '2017-12-23T07:32:08Z',
            'end_time': '2018-03-07T07:32:21Z',
            'exit_code': 1,
            'status': 'Failed'
          }
        }
      },
      {
        'project': {
          'id': 'brigade-69bec354fc350605c51bc16d4dd2b6073',
          'name': 'Azure/kashti',
          'repo': {
            'name': 'github.com/Azure/kashti',
            'cloneURL': 'https://github.com/Azure/kashti.git'
          },
          'kubernetes': {
            'namespace': 'default',
            'vcsSidecar': ''
          },
          'github': {},
          'secrets': {}
        },
        'lastBuild': {
          'id': '01c0matkmjpjkrbfcnhfyjerfh',
          'project_id': 'brigade-29d38c7477ecee18e184b69bec354fc350605c51bc16d4dd2b6073',
          'type': 'pull_request',
          'provider': 'github',
          'commit': 'ad0703ac08e80448764b34dc089d0f73a1242ae9',
          'payload': '',
          'script': 'Y29uc3QgeyBldmVudHMsIEpvYiB9ID0gcmVxdWlyZSgiYnJpZ2FkaWVyIik7CgpldmVudHMub24oInB1bGxfcmVxdWVzdCIpLCAoZSwgcCkgPT4gewogIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoZS5wYXlsb2FkKSkKfSk7Cg==',
          'worker': {
            'id': 'brigade-worker-01c0matkmjpjkrbfcnhfyjerfh-ad0703ac',
            'build_id': '01c0matkmjpjkrbfcnhfyjerfh',
            'project_id': 'brigade-29d38c7477ecee18e184b69bec354fc350605c51bc16d4dd2b6073',
            'start_time': '2017-12-23T07:32:08Z',
            'end_time': '2017-12-23T07:32:21Z',
            'exit_code': 1,
            'status': 'Success'
          }
        }
      },
      {
        'project': {
          'id': 'brigade-4ed6c77c221e5130f7b593a5705081f543c2762b',
          'name': 'seanknox/monkeys',
          'repo': {
            'name': 'github.com/seanknox/monkeys',
            'cloneURL': 'https://github.com/seanknox/monkeys'
          },
          'kubernetes': {
            'namespace': 'default',
            'vcsSidecar': ''
          },
          'github': {},
          'secrets': {}
        },
        'lastBuild': {
          'id': '01c0matkmjpjkrbfcnhfyjerfh',
          'project_id': 'brigade-4ed6c77c221e5130f7b593a5705081f543c2762b',
          'type': 'pull_request',
          'provider': 'github',
          'commit': '57708cbea25fa404f51d92e2d8c58e8a48c3030d',
          'payload': '',
          'script': 'Y29uc3QgeyBldmVudHMsIEpvYiB9ID0gcmVxdWlyZSgiYnJpZ2FkaWVyIik7CgpldmVudHMub24oInB1bGxfcmVxdWVzdCIpLCAoZSwgcCkgPT4gewogIGNvbnNvbGUubG9nKEpTT04ucGFyc2UoZS5wYXlsb2FkKSkKfSk7Cg==',
          'worker': {
            'id': 'brigade-worker-01c0matkmjpjkrbfcnhfyjerfh-ad0703ac',
            'build_id': '01c0matkmjpjkrbfcnhfyjerfh',
            'project_id': 'brigade-4ed6c77c221e5130f7b593a5705081f543c2762b',
            'start_time': '2017-12-23T07:32:08Z',
            'end_time': '2018-01-23T07:32:21Z',
            'exit_code': 1,
            'status': 'Unknown'
          }
        }
      }
    ];
    return { projectBuilds, builds };
  }
}
