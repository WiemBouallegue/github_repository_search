import { searchGitHubRepo, isRepositoryPopular } from "../services";

describe("isRepositoryPopular", () => {
  test("returns true if stars + forks * 2 is greater than or equal to 500", () => {
    expect(isRepositoryPopular(300, 100)).toBe(true);
    expect(isRepositoryPopular(200, 150)).toBe(true);
    expect(isRepositoryPopular(100, 200)).toBe(true);
  });

  test("returns false if stars + forks * 2 is less than 500", () => {
    expect(isRepositoryPopular(200, 50)).toBe(false);
    expect(isRepositoryPopular(100, 100)).toBe(false);
    expect(isRepositoryPopular(50, 200)).toBe(false);
  });
});

describe("searchGitHubRepo", () => {
  // Mock the Octokit API request using Jest's mock functions
  jest.mock("@octokit/rest", () => ({
    Octokit: jest.fn().mockImplementation(() => ({
      request: jest.fn().mockResolvedValue({
        status: 200,
        data: {
          items: [
            {
              full_name: "example/repo",
              owner: {
                login: "exampleuser",
                avatar_url: "https://example.com/avatar.png",
              },
              stargazers_count: 100,
              forks_count: 50,
            },
          ],
        },
      }),
    })),
  }));

  test("returns the correct repository details", async () => {
    const repoName = "example";
    const result = await searchGitHubRepo(repoName);

    expect(result).toEqual({
      name: "example/repo",
      author: "exampleuser",
      stars: 100,
      forks: 50,
      authorImage: "https://example.com/avatar.png",
      isPopular: true,
    });
  });

  test("throws an error if the GitHub API request fails", async () => {
    // Mock a failed response from the API
    jest.mock("@octokit/rest", () => ({
      Octokit: jest.fn().mockImplementation(() => ({
        request: jest.fn().mockRejectedValue(new Error("API request failed")),
      })),
    }));

    const repoName = "example";
    await expect(searchGitHubRepo(repoName)).rejects.toThrow(
      "GitHub API request failed"
    );
  });
});
